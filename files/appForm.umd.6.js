((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[6],{

/***/ "0690":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4acd20fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/TraitementMyOwn.vue?vue&type=template&id=7a509da4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-container',{staticClass:"bv-example-row bg-light p-4",attrs:{"fluid":"lg"}},[_c('div',{attrs:{"checkUid":_vm.checkUid}},[_c('h5',{staticClass:"titre mb-3 shadow-sm p-2"},[_vm._v(" Mes devis : "),_c('span',{staticClass:"form-title"},[_vm._v(_vm._s(_vm.form.name))])])]),_c('b-row',{attrs:{"align-h":"center"}},[_c('b-col',{attrs:{"cols":"12"}},[_c('list-table',{attrs:{"liste_fields_check":_vm.ListeFieldsCheck,"liste_fields_display":_vm.ListeFieldsDisplay}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue?vue&type=template&id=7a509da4&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4acd20fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/ListTable.vue?vue&type=template&id=154259d6&lang=html&
var ListTablevue_type_template_id_154259d6_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-table',{staticClass:"traitement",attrs:{"items":_vm.traitementFormItemsDisplay,"fields":_vm.liste_fields_display,"outlined":true,"hover":true,"head-variant":"dark","responsive":"","sticky-header":"350px"},scopedSlots:_vm._u([{key:"cell(status)",fn:function(data){return [_c('div',[_c('h5',{staticClass:"status"},[_vm._v(" "+_vm._s(data.item.status == 1 ? "Traité" : "non traité")+" ")])])]}},{key:"cell(action)",fn:function(data){return [_c('b-button-group',{},[_c('b-button',{attrs:{"size":"sm","variant":"outline-primary"},on:{"click":function($event){return _vm.voirForm(data.index)}}},[_vm._v(" voir ")]),_c('b-button',{attrs:{"size":"sm","variant":"outline-success"},on:{"click":function($event){return _vm.showResult(data.item)}}},[_vm._v(" Editer ")]),_c('b-button',{attrs:{"size":"sm","variant":"outline-warning"},on:{"click":function($event){return _vm.formTraiter(data.item)}}},[_vm._v(" Traiter ")])],1)]}}])}),_c('b-modal',{ref:"modal",staticClass:"super-hover",attrs:{"id":"modal--closing","size":"lg","title":'Résultat du formulaire',"scrollable":""},model:{value:(_vm.showModal),callback:function ($$v) {_vm.showModal=$$v},expression:"showModal"}},[(_vm.traitementFormItems.length)?_c('b-row',{attrs:{"align-h":"center"}},_vm._l((_vm.validSteps),function(steps,i){return _c('b-col',{key:i,attrs:{"sm":"12"}},[(steps !== undefined)?_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{attrs:{"block":"","variant":"dark","disabled":""}},[_vm._v(_vm._s(steps.info.title))])],1),_c('b-collapse',{attrs:{"id":"accordion-option","accordion":"my-accordion","role":"tabpanel","visible":""}},[_c('b-card-body',{staticClass:"p-2"},[_c('b-row',{staticClass:"d-flex flex-wrap"},_vm._l((steps.fields),function(item,index){return _c('b-col',{key:index,staticClass:"m-1",attrs:{"cols":"12"}},[_c('type-displays',{attrs:{"fields":item}})],1)}),1)],1)],1)],1):_vm._e()],1)}),1):_vm._e()],1)],1)}
var ListTablevue_type_template_id_154259d6_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/ListTable.vue?vue&type=template&id=154259d6&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./src/store/utilities.js
var utilities = __webpack_require__("fd71");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/ListTable.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ListTablevue_type_script_lang_js_ = ({
  name: "Listesfomes",
  props: {
    liste_fields_check: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    liste_fields_display: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  components: {
    typeDisplays: function typeDisplays() {
      return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "5b90"));
    }
  },
  data: function data() {
    return {
      showModal: false,
      currentIndex: null
    };
  },
  mounted: function mounted() {//
  },
  watch: {},
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["items"])), Object(vuex_esm["b" /* mapGetters */])(["traitementFormItems"])), {}, {
    validSteps: function validSteps() {
      var all = [];
      var forms;

      if (this.traitementFormItems.length && this.currentIndex !== null) {
        forms = this.traitementFormItems[this.currentIndex].datas;
        all.push(forms[0]);

        for (var i = 0; i < forms.length; i++) {
          var kk = utilities["a" /* default */].selectNextState(forms, i);

          if (kk) {
            i = kk;
            all.push(forms[kk]);
          }
        }
      }

      return all;
    },
    traitementFormItemsDisplay: function traitementFormItemsDisplay() {
      var lists = [];

      for (var i in this.traitementFormItems) {
        var rowData = this.traitementFormItems[i];
        var row = {
          id: rowData.id,
          status: rowData.status,
          created: rowData.created,
          price: rowData.price
        };

        for (var s in rowData.datas) {
          var stape = rowData.datas[s];

          for (var f in stape.fields) {
            var field = stape.fields[f]; //console.log("field.name : ", field.name);

            if (this.liste_fields_check.includes(field.name)) {
              row[field.name] = field.value;
            }
          }
        }

        lists.push(row);
      }

      return lists;
    }
  }),
  methods: {
    voirForm: function voirForm(id) {
      console.log("id", id);
      this.currentIndex = id;
      this.showModal = !this.showModal;
    },
    showResult: function showResult(id) {
      console.log("id", id);
    },
    formTraiter: function formTraiter(id) {
      var status = "";

      if (id.status == "0") {
        status = "1";
      } else status = "0";

      this.$bvModal.msgBoxConfirm("Confirmez-vous avoir l'action", {
        title: "Alerte",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        okTitle: "Traiter",
        cancelTitle: "Annuler",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value) {
          console.log("refus : ", id);
          config["a" /* default */].deleteFormTraitement(id.id, status).then(function () {
            window.location.reload();
          });
        }
      });
      /*
        .catch((err) => {
          console.log("refus : ", err);
        });
        /**/
    }
  }
});
// CONCATENATED MODULE: ./src/App/traitement/ListTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var traitement_ListTablevue_type_script_lang_js_ = (ListTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/traitement/ListTable.vue?vue&type=style&index=0&lang=scss&
var ListTablevue_type_style_index_0_lang_scss_ = __webpack_require__("d77f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/traitement/ListTable.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  traitement_ListTablevue_type_script_lang_js_,
  ListTablevue_type_template_id_154259d6_lang_html_render,
  ListTablevue_type_template_id_154259d6_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListTable = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/TraitementMyOwn.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import axios from "axios";
 //import utilities from "./Utilities";
//import NavLine from "./NavLine.vue";


 //import pages from "./pages.vue";
//import pages from "./pages2.vue";

/* harmony default export */ var TraitementMyOwnvue_type_script_lang_js_ = ({
  components: {
    ListTable: ListTable
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  watch: {
    stepsId: function stepsId() {
      this.datasBdOrLocalStorage();
    }
  },
  mounted: function mounted() {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["traitementId"])), Object(vuex_esm["b" /* mapGetters */])(["traitementFormItems", "form", "uid"])), {}, {
    ListeFieldsDisplay: function ListeFieldsDisplay() {
      var fieldsDisplay = [{
        label: "Id",
        key: "id"
      }, {
        label: "Status du formulaire",
        key: "status"
      }, {
        label: "Price",
        key: "price"
      }, {
        label: "#Action",
        key: "action",
        stickyColumn: true
      }];

      for (var i in this.form.forms) {
        var form = this.form.forms[i]; // console.log("etate : ", form.info.name, "\n\n");

        for (var f in form.fields) {
          var field = form.fields[f]; // console.log(field);

          if (field.display_field) {
            fieldsDisplay.push({
              label: field.label,
              key: field.name
            });
          }
        }
      }

      return fieldsDisplay;
    },
    ListeFieldsCheck: function ListeFieldsCheck() {
      var lists = [];

      for (var i in this.ListeFieldsDisplay) {
        lists.push(this.ListeFieldsDisplay[i].key);
      }

      return lists;
    },
    checkUid: function checkUid() {
      if (this.uid) {
        this.loadDatas();
        return true;
      }

      return false;
    }
  }),
  methods: {
    loadDatas: function loadDatas() {
      var _this = this;

      if (this.uid) this.$store.dispatch("loadTraitementDatas", {
        id: this.id,
        uid: this.uid
      }).then(function () {
        _this.$store.dispatch("setTraitId", _this.id);

        _this.$store.dispatch("setFormId", _this.id);
      });
    },
    deleteSteps: function deleteSteps(datas) {
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
    saveToLocal: function saveToLocal() {
      //var self = this;
      //var datas = this.form;
      config["a" /* default */].prepareDatasToSave(this.form).then(function (val) {
        config["a" /* default */].saveForm(val).then(function () {//
        });
      });
      /*
      utilities.saveSteps(datas).then((reponse) => {
        var forms = JSON.stringify(reponse[0].fields);
        localStorage.setItem("allo", JSON.stringify(forms));
        console.log("savesteps: ", reponse);
        axios
          .post(
            "http://lesroisdelareno.kksa" + "/query-ajax/insert-update",
            reponse
          )
          .then(function (response) {
            console.log("post response ", response);
            self.$store.dispatch("setFormId", self.id);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
      /**/
    },
    resetValue: function resetValue() {
      this.$store.getters.formDatas.selected = "";
      this.$store.getters.formDatas.value = [];
      console.log("prev");
    },
    resetModal: function resetModal() {//   this.formDatas.info.title = "";
      //   this.titleState = null;
      //   this.headerTitle = "";
      //   this.headerState = null;
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault(); // Exit when the form isn't valid

      this.demo = true;
      this.$nextTick(function () {
        _this2.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue?vue&type=script&lang=js&
 /* harmony default export */ var traitement_TraitementMyOwnvue_type_script_lang_js_ = (TraitementMyOwnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/traitement/TraitementMyOwn.vue?vue&type=style&index=0&lang=scss&
var TraitementMyOwnvue_type_style_index_0_lang_scss_ = __webpack_require__("b49c");

// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue






/* normalize component */

var TraitementMyOwn_component = Object(componentNormalizer["a" /* default */])(
  traitement_TraitementMyOwnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TraitementMyOwn = __webpack_exports__["default"] = (TraitementMyOwn_component.exports);

/***/ }),

/***/ "5e76":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "99b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b49c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e76");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d77f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99b1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=appForm.umd.6.js.map