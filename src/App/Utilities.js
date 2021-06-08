const Utilities = {
  /**
   * Prepare les données pour la sauvagarde.
   */
  saveSteps: function (datas) {
    return new Promise((resolv) => {
      //console.log("fdate : ", datas);
      var forms = "";
      if (datas.forms) {
        forms = JSON.stringify(datas.forms);
      }
      var result = [];
      if (datas != "") {
        //edition de la table contents
        var table1 = {
          table: "appformmanager_fomrs",
          fields: {
            forms: forms,
            description: datas.description,
            name: datas.name,
          },
          action: "update",
        };
        if (datas.id) {
          table1.where = [
            {
              column: "id",
              value: datas.id,
            },
          ];
        }

        result.push(table1);
      }
      resolv(result);
    });
  },

  field() {
    return {
      type: "",
      title: "",
      label: "",
      name: "",
      value: null,
      imgUrl: "",
      require: "",
      options: [],
      states: [],
    };
  },
  resetField(field) {
    const defaultField = this.field();
    for (const i in field) {
      field[i] = defaultField[i];
    }
  },
  typeOptions() {
    return [
      { value: null, text: "Please select an option" },
      { value: "radio", text: "Radio" },
      { value: "text", text: "text" },
      { value: "select", text: "Select" },
      { value: "number", text: "Number" },
      { value: "checkbox", text: "Checkbox" },
      { value: "increment", text: "Spin Button" },
      { value: "markuptitle", text: "Markup Title" },
      { value: "markupimage", text: "Markup Image" },
      { value: "checkboximg", text: "Checkbox Image" },
      { value: "codepostal", text: "Code Postal input" },
      { value: "radiodesc", text: "Radio with Description" },
      { value: "numberup", text: "Number label up" },
      { value: "file", text: "Ajout de fichiers" },
      { value: "recapitulatif", text: "Recapitulatif du montant" },
      { value: "userlogin", text: "Connexion utilisateur" },
    ];
  },
};
export default Utilities;
