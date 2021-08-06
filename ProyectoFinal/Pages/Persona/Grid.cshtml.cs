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
    public class GridModel : PageModel
    {
        private readonly IPersonaService personaService;

        public GridModel(IPersonaService personaService)
        {
            this.personaService = personaService;
        }


        public IEnumerable<PersonaEntity> GridList { get; set; } = new List<PersonaEntity>();


        public async Task<IActionResult> OnGet()
        {
            try
            {
                GridList = await personaService.Get();
                return Page();
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }

        }

        public async Task<IActionResult> OnDeleteELiminar(int id)
        {
            try
            {

                var result = await personaService.Delete(new()
                {

                   IdPersona = id
                });

                return new JsonResult(result);

            }
            catch (Exception ex)
            {

                return new JsonResult(new DBEntity { CodeError = ex.HResult, MsgError = ex.Message });
            }

        }
    }
}
