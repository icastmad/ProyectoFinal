using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WBL;

namespace WebApplication.Pages.Persona
{
    public class EditModel : PageModel
    {
        private readonly IPersonaService personaService;
       

        public EditModel(IPersonaService personaService)
        {
            this.personaService = personaService;
         
        }


        [BindProperty(SupportsGet = true)]
        public int? id { get; set; }

        [BindProperty]
        [FromBody]
        public PersonaEntity Entity { get; set; } = new PersonaEntity();
       

        public async Task<IActionResult> OnGet()
        {
            try
            {
                if (id.HasValue)
                {
                    Entity = await personaService.GetById(new() { IdPersona = id });
                }

              
                return Page();
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
        }

        public async Task<IActionResult> OnPostAsync()
        {
            try
            {
                var result = new DBEntity();
                if (Entity.IdPersona.HasValue)
                {
                    //Actualizar
                    result = await personaService.Update(Entity);
                }
                else
                {
                    //Nuevo Registro
                  result = await personaService.Create(Entity);
                }

                return new JsonResult(result);
            }
            catch (Exception ex)
            {
                return new JsonResult(new DBEntity { CodeError = ex.HResult, MsgError = ex.Message });
            }
        }
    }
}
