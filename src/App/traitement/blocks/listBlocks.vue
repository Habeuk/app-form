<template>
  <div>
    <div class="d-flex justify-content-center p-5" v-if="isBusy">
      <b-icon
        icon="circle-fill"
        animation="throb"
        font-scale="4"
        variant="primary"
      ></b-icon>
    </div>
    <div v-if="!isBusy" class="titre-project-resume">
      <b-col cols="12" md="5" lg="3" class="notif">
        <span class="notif-alert notif-at">{{
          nombreStatus.rappel.length
        }}</span>
        <span>projet en attente de rappel</span></b-col
      >
      <b-col cols="12" md="5" lg="3" class="notif">
        <span class="notif-alert notif-sa">{{ nombreStatus.save.length }}</span>
        <span>projet sauvegardé,</span></b-col
      >
      <b-col cols="12" md="5" lg="3" class="notif" v-if="$store.state.mode">
        <span class="notif-ab notif-alert">{{
          nombreStatus.loose.length
        }}</span>
        <span>projet abandonné</span></b-col
      >
    </div>
    <b-row :trigger_perfom="trigger_perfom" class="list-block" v-if="!isBusy">
      <b-col v-for="(item, i) in traitementFormItemsDisplay" :key="i" md="12">
        <block
          :item="item"
          :form="form"
          :traitementFormItems="traitementFormItems"
          :data-id="i"
          @get-valide-stepe="getValideStepe"
          @form-traiter="formTraiter"
          @get-info-user="getInfoUser"
        ></block>
      </b-col>
    </b-row>

    <!-- -->
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="fill"
      size="sm"
      class="pt-5 pb-5 mt-5 mb-0"
      @change="changePagination"
      v-if="totalRows > 20"
    ></b-pagination>

    <!-- -->
    <b-modal
      id="modal--closing"
      v-model="showModal"
      ref="modal"
      size="lg"
      :title="'Résultat du formulaire'"
      scrollable
      class="super-hover"
      cancelTitle="Quitter"
      okTitle="Me rappeler"
    >
      <b-row align-h="center" v-if="traitementFormItems.length">
        <b-col sm="12" class="mb-4" v-for="(steps, i) in validSteps2" :key="i">
          <b-card no-body class="mb-1" v-if="steps !== undefined">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block variant="dark" disabled>
                {{ steps.info.title }}
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-option"
              accordion="my-accordion"
              role="tabpanel"
              visible
            >
              <b-card-body class="p-2">
                <b-row class="d-flex flex-wrap">
                  <b-col
                    cols="12"
                    v-for="(field, index) in steps.fields"
                    :key="index"
                  >
                    <type-displays
                      :field="field"
                      :currentDevis="currentDevis"
                      v-if="field.status === undefined || field.status"
                      class="mb-2"
                    ></type-displays>
                    <div v-else>
                      <pre class="d-none">
                        {{ field.name }}
                      </pre>
                    </div>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-col>
      </b-row>
      <template #modal-footer>
        <div class="d-flex">
          <div class="w-100">
            <b-button
              variant="primary"
              size="sm"
              class="mr-3"
              @click="$bvModal.hide('modal--closing')"
            >
              Quitter
            </b-button>
            <b-button
              variant="primary"
              size="sm"
              @click="updateStatus()"
              v-if="
                (currentDevis.status === '1' || currentDevis.status === 1) &&
                currentDevis.uid.includes($store.getters.uid)
              "
            >
              Me rappeler
            </b-button>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Utilities from "../../../store/utilities";
import config from "../../config/config";

import { users } from "drupal-vuejs";
import block from "../affichage/bloc.vue";
export default {
  name: "listBlocks",
  props: {
    liste_fields_check: {
      type: Array,
      default: function () {
        return [];
      },
    },
    liste_fields_display: {
      type: Array,
      default: function () {
        return [];
      },
    },
    totalRows: {
      type: Number,
      required: true,
    },
    isBusy: {
      type: Boolean,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },
  components: {
    block,
    typeDisplays: () => import("../affichage/typeDisplays.vue"),
  },
  data() {
    return {
      showModal: false,
      validSteps2: [],
      traitementFormItemsDisplay: [],
      /**
       * L'id du formulaire selectionné.
       */
      currentDataId: null,
      /**
       * Les informations du devis selectionné.
       */
      currentDevis: {},
      currentPage: 1,
      //totalRows: 20,
      //perPage: 20,
    };
  },

  computed: {
    ...mapState(["items", "CachesUser"]),
    ...mapGetters(["traitementFormItems", "form"]),
    trigger_perfom() {
      if (this.traitementFormItems.length) {
        this.getTraitementFormItems();
        return this.traitementFormItems.length;
      }
      return "";
    },
    nombreStatus() {
      const nbst = {
        save: [],
        rappel: [],
        loose: [],
      };
      if (this.traitementFormItemsDisplay.length) {
        for (const i in this.traitementFormItemsDisplay) {
          const devis = this.traitementFormItemsDisplay[i];
          if (devis.status === "1") nbst.save.push(devis);
          else if (devis.status === "0") nbst.rappel.push(devis);
          else if (devis.status === "2") nbst.loose.push(devis);
        }
      }
      return nbst;
    },
  },
  methods: {
    getTraitementFormItems() {
      this.traitementFormItemsDisplay = [];
      for (const i in this.traitementFormItems) {
        const rowData = this.traitementFormItems[i];
        const row = {
          id: rowData.id,
          status: rowData.status,
          created: rowData.created,
          price: rowData.price,
          uid: rowData.uid,
          user: {}, //pour gerer les informations provenant de la connexions.
          idloop: i, // permet de retrouver aisement, le devis dans le current table (traitementFormItems);
        };
        this.getUser(rowData.uid, row);
        for (const s in rowData.datas) {
          const stape = rowData.datas[s];
          for (const f in stape.fields) {
            const field = stape.fields[f];
            //console.log("field.name : ", field.name);
            if (this.liste_fields_check.includes(field.name)) {
              row[field.name] = field;
            }
          }
        }
        this.traitementFormItemsDisplay.push(row);
      }
    },

    showResult(id) {
      console.log("id", id);
    },
    formTraiter(id) {
      var status = "";
      if (id.status == "0") {
        status = "1";
      } else status = "0";
      this.$bvModal
        .msgBoxConfirm("Confirmez-vous l'action ?", {
          title: "Alerte",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          okTitle: "Traiter",
          cancelTitle: "Annuler",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            console.log("Refus : ", id);
            config.deleteFormTraitement(id.id, status).then(() => {
              window.location.reload();
            });
          }
        });
      /**
       *  .catch((err) => {
       *    console.log("refus : ", err);
       *  });
       */
    },
    /**
     */
    getUser(uid, item = {}) {
      if (this.CachesUser["uid" + uid]) {
        item.user = this.CachesUser["uid" + uid];
      } else {
        users.getUser(uid).then((rep) => {
          item.user = rep;
          this.$store.dispatch("setCachesUser", { uid: uid, user: rep });
        });
      }
    },
    getInfoUser(item) {
      var user = item.user;
      var idloop = item.idloop;
      const userDisplay = [];
      var keys = [
        { key: "mail", label: "Mail" },
        { key: "name", label: "Nom" },
        { key: "field_prenom", label: "Prénom" },
        { key: "field_telephone", label: "Téléphone" },
      ];
      keys.forEach((key) => {
        if (user[key.key] && user[key.key][0]) {
          userDisplay.push({
            text: key.label + " : " + user[key.key][0].value,
          });
        }
      });
      if (this.traitementFormItems[idloop])
        this.$set(this.traitementFormItems[idloop], "user", userDisplay);
      return userDisplay;
    },
    updateStatus() {
      if (this.currentDataId) {
        var dataUpdate = {
          table: "appformmanager_datas",
          fields: {
            status: 0,
          },
          action: "update",
          where: [
            {
              column: "id",
              value: this.currentDataId,
            },
          ],
        };
        config.saveForm([dataUpdate], this.$store.state.mode).then(() => {
          config.CustomModalSuccess(
            "Vous serrez rappellé par un specialiste dans les plus bref delais.",
            {
              title: "Status du devis mise à jour",
              footerClass: "d-none",
            }
          );
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        });
      }
    },
    changePagination(val) {
      this.$emit("ev-change-pagination", val);
    },
    getValideStepe(id) {
      var self = this;
      this.showModal = !this.showModal;
      this.validSteps2 = [];
      this.currentDataId = this.traitementFormItems[id].id;
      this.currentDevis = this.traitementFormItems[id];
      const forms = this.traitementFormItems[id].datas;
      this.validSteps2.push(forms[0]);
      function execution(i) {
        const loop = function (i) {
          return new Promise((resolv) => {
            Utilities.selectNextState(forms, i).then((rep) => {
              resolv(rep);
            });
          });
        };
        loop(i).then((kk) => {
          if (kk && kk < 250) {
            self.validSteps2.push(forms[kk]);
            // Console.log("kk : ", kk);
            execution(kk);
          }
        });
      }
      execution(0);
    },
  },
};
</script>
