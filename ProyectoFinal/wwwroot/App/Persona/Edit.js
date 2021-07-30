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
            }
        },
        mounted: function () {
            CreateValidator(this.Formulario);
        }
    });
    Formulario.$mount("#AppEdit");
})(PersonaEdit || (PersonaEdit = {}));
//# sourceMappingURL=Edit.js.map