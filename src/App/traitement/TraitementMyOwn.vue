<template>
  <div>
    <b-container fluid="lg">
      <div :checkUid="checkUid">
        <title-bar
          :conf="{ col: true, text: 'Mes Devis' }"
          :id="id"
          :showDevis="false"
        ></title-bar>
      </div>

      <div class="appfom-container">
        <b-row align-h="center">
          <b-col class="" cols="12">
            <listBlocks
              :liste_fields_check="ListeFieldsCheck"
              :liste_fields_display="ListeFieldsDisplay"
              :totalRows="totalRows"
              :isBusy="isBusy"
              :perPage="perPage"
              @ev-change-pagination="ChangePagination"
            ></listBlocks>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
//import axios from "axios";
import config from "../config/config.js";
//import utilities from "./Utilities";
import TitleBar from "../TitleBar.vue";
import { mapState, mapGetters } from "vuex";
import listBlocks from "./blocks/listBlocks.vue";
//import pages from "./pages.vue";
//import pages from "./pages2.vue";
export default {
  components: { listBlocks, TitleBar },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return { totalRows: 0, isBusy: false, perPage: 20 };
  },
  watch: {
    stepsId() {
      this.datasBdOrLocalStorage();
    },
  },
  mounted() {
    //
  },
  computed: {
    ...mapState(["traitementId"]),
    ...mapGetters(["traitementFormItems", "form", "uid"]),
    ListeFieldsDisplay() {
      const fieldsDisplay = [
        {
          label: "Date",
          key: "created",
          formatter: function (val) {
            return config.getMysqlDateToFrench(val);
          },
        },
        {
          label: "Status",
          key: "status",
          thStyle: { minWidth: "140px" },
        },
        {
          label: "Prix",
          key: "price",
        },
        {
          label: "Que souhaitez vous faire",
          key: "action",
          stickyColumn: true,
        },
      ];
      for (const i in this.form.forms) {
        const form = this.form.forms[i];
        // console.log("etate : ", form.info.name, "\n\n");
        for (const f in form.fields) {
          const field = form.fields[f];
          // console.log(field);
          if (field.display_field) {
            fieldsDisplay.push({ label: field.label, key: field.name });
          }
        }
      }
      return fieldsDisplay;
    },
    ListeFieldsCheck() {
      const lists = [];
      for (const i in this.ListeFieldsDisplay) {
        lists.push(this.ListeFieldsDisplay[i].key);
      }
      return lists;
    },
    checkUid() {
      if (this.uid) {
        this.loadDatas();
        this.getTotalRows();
        return true;
      }
      return false;
    },
  },
  methods: {
    deleteSteps(datas) {
      var all = this.$store.state.allStepsDatas;
      var r = all.indexOf(this.formDatas);
      this.$emit("index-to-delete", r);
      console.log("de", datas);
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      }
    },
    saveToLocal() {
      //var self = this;
      //var datas = this.form;
      config.prepareDatasToSave(this.form).then((val) => {
        config.saveForm(val).then(() => {
          //
        });
      });
    },
    resetValue() {
      this.$store.getters.formDatas.selected = "";
      this.$store.getters.formDatas.value = [];
      console.log("prev");
    },
    resetModal() {
      //   this.formDatas.info.title = "";
      //   this.titleState = null;
      //   this.headerTitle = "";
      //   this.headerState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      // Exit when the form isn't valid
      this.demo = true;
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    loadDatas(pagination = 0) {
      this.isBusy = true;
      var pag = null;
      if (pagination) pag = (pagination - 1) * this.perPage;
      this.$store
        .dispatch("loadTraitementDatas", {
          id: this.id,
          pagination: pag,
          uid: this.uid,
        })
        .then(() => {
          this.$store.dispatch("setTraitId", this.id);
          this.$store.dispatch("setFormId", this.id);
          this.isBusy = false;
        });
    },
    ChangePagination(val) {
      this.loadDatas(val);
    },
    getTotalRows() {
      var datas =
        "select count(*) as nombres from `appformmanager_datas` where `appformmanager_forms` = " +
        this.id +
        " and `uid` = " +
        this.uid;
      config.getData(datas).then((resp) => {
        if (resp.data[0] && resp.data[0].nombres) {
          this.totalRows = parseInt(resp.data[0].nombres);
        }
        console.log("resp[0].nombres : ", resp.data[0]);
      });
    },
  },
};
</script>
<style lang="scss">
.form-title {
  letter-spacing: 2px;
  margin-left: 10px;
  font-weight: 600;
}
.block-button {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  button {
    margin: 5px;
  }
}
@import "./affichage/traitement.scss";
</style>
