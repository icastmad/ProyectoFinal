"use strict";
var PersonaEdit;
(function (PersonaEdit) {
    var Entity = $("#AppEdit").data("entity");
    var Formulario = new Vue({
        data: {
            Formulario: "#FormEdit",
            Entity: Entity,
        },
        methods: {
            RefrescarValidaciones: function () {
                var _this = this;
                setTimeout(function () {
                    BValidateData(_this.Formulario);
                }, 200);
            },
            Save: function () {
                if (BValidateData(this.Formulario)) {
                    Loading.fire("Guardando...");
                    App.AxiosProvider.PersonaGuardar(this.Entity).then(function (data) {
                        Loading.close();
                        if (data.CodeError == 0) {
                            Toast.fire({ title: "Se guardó satisfactoriamente", icon: "success" }).then(function () { return window.location.href = "Persona/Grid"; });
                        }
                        else {
                            Toast.fire({ title: data.MsgError, icon: "error" });
                        }
                    });
                }
                else {
                    Toast.fire({ title: "Por favor complete los campos requeridos", icon: "error" });
                }
            }
        },
        mounted: function () {
            CreateValidator(this.Formulario);
        }
    });
    Formulario.$mount("#AppEdit");
})(PersonaEdit || (PersonaEdit = {}));
//# sourceMappingURL=Edit.js.map