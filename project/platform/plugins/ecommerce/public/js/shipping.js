(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(a=i.key,o=void 0,o=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(a,"string"),"symbol"===e(o)?o:String(o)),i)}var a,o}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,i;return n=e,(r=[{key:"init",value:function(){$(document).on("click",".btn-confirm-delete-region-item-modal-trigger",(function(e){e.preventDefault();var t=$("#confirm-delete-region-item-modal");t.find(".region-item-label").text($(e.currentTarget).data("name")),t.find("#confirm-delete-region-item-button").data("id",$(e.currentTarget).data("id")),t.modal("show")})),$(document).on("click","#confirm-delete-region-item-button",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({type:"POST",url:$("div[data-delete-region-item-url]").data("delete-region-item-url"),data:{_method:"DELETE",id:t.data("id")},success:function(e){e.error?Botble.showError(e.message):($(".wrap-table-shipping-"+t.data("id")).remove(),Botble.showSuccess(e.message)),$("#confirm-delete-region-item-modal").modal("hide")},error:function(e){Botble.handleError(e)},complete:function(){t.removeClass("button-loading")}})})),$(document).on("click",".btn-confirm-delete-price-item-modal-trigger",(function(e){e.preventDefault();var t=$("#confirm-delete-price-item-modal");t.find(".region-price-item-label").text($(e.currentTarget).data("name")),t.find("#confirm-delete-price-item-button").data("id",$(e.currentTarget).data("id")),t.modal("show")})),$(document).on("click","#confirm-delete-price-item-button",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({type:"POST",url:$("div[data-delete-rule-item-url]").data("delete-rule-item-url"),data:{_method:"DELETE",id:t.data("id")},success:function(e){e.error?Botble.showError(e.message):($(".box-table-shipping-item-"+t.data("id")).remove(),0===e.data.count&&$(".wrap-table-shipping-"+e.data.shipping_id).remove(),Botble.showSuccess(e.message)),$("#confirm-delete-price-item-modal").modal("hide")},error:function(e){Botble.handleError(e)},complete:function(){t.removeClass("button-loading")}})}));var e=function(e,t,n,r){$(document).find(".field-has-error").removeClass("field-has-error");var i=e;i.addClass("button-loading");var a=[];"POST"!==n&&(a._method=n),$.each(t.serializeArray(),(function(e,t){"from"!==t.name&&"to"!==t.name&&"price"!==t.name||t.value&&(t.value=parseFloat(t.value.replace(",","")).toFixed(2)),a[t.name]=t.value})),r&&(a.shipping_id=r),a=$.extend({},a),$.ajax({type:"POST",url:t.prop("action"),data:a,success:function(e){var t,n,a;if(e.error)Botble.showError(e.message);else if(Botble.showSuccess(e.message),null!=e&&null!==(t=e.data)&&void 0!==t&&null!==(n=t.rule)&&void 0!==n&&n.shipping_id&&null!=e&&null!==(a=e.data)&&void 0!==a&&a.html){var o=$(".wrap-table-shipping-"+e.data.rule.shipping_id+" .pd-all-20.border-bottom"),l=o.find(".box-table-shipping-item-"+e.data.rule.id);l.length?l.replaceWith(e.data.html):o.append(e.data.html),Botble.initResources()}r&&i.closest(".modal").modal("hide")},error:function(e){Botble.handleError(e)},complete:function(){i.removeClass("button-loading")}})};$(document).on("click",".btn-save-rule",(function(t){t.preventDefault();var n=$(t.currentTarget);e(n,n.closest("form"),"PUT",null)})),$(document).on("change",".select-rule-type",(function(e){e.preventDefault();var t=$(e.currentTarget),n=t.closest(".box-table-shipping"),r=t.find("option:selected");r.data("show-from-to")?n.find(".rule-from-to-inputs").removeClass("d-none"):n.find(".rule-from-to-inputs").addClass("d-none"),n.find(".unit-item-label").text(r.data("unit")),n.find(".rule-from-to-label").text(r.data("text"))})),$(document).on("keyup",".input-sync-item",(function(e){var t=$(e.currentTarget),n=t.val();n&&!isNaN(n)||(n=0),t.closest(".input-shipping-sync-wrapper").find(t.data("target")).text(Botble.numberFormat(parseFloat(n),2))})),$(document).on("keyup",".input-sync-text-item",(function(e){var t=$(e.currentTarget);t.closest(".input-shipping-sync-wrapper").find(t.data("target")).text(t.val())})),$(document).on("keyup",".input-to-value-field",(function(e){var t=$(e.currentTarget),n=t.closest(".input-shipping-sync-wrapper");t.val()?(n.find(".rule-to-value-wrap").removeClass("hidden"),n.find(".rule-to-value-missing").addClass("hidden")):(n.find(".rule-to-value-wrap").addClass("hidden"),n.find(".rule-to-value-missing").removeClass("hidden"))})),$(document).on("click",".btn-add-shipping-rule-trigger",(function(e){e.preventDefault();var t=$(e.currentTarget),n=$("#add-shipping-rule-item-modal");$("#add-shipping-rule-item-button").data("shipping-id",t.data("shipping-id")),n.find("select[name=type] option[disabled]").prop("disabled",!1),t.data("country")||n.find("select[name=type] option[value=base_on_zip_code]").prop("disabled",!0),n.find("input[name=name]").val(""),n.find("select[name=type]").val("base_on_price").trigger("change"),n.find("input[name=from]").val("0"),n.find("input[name=to]").val(""),n.find("input[name=price]").val("0"),n.modal("show")})),$(document).on("click",".btn-shipping-rule-item-trigger",(function(e){e.preventDefault();var t=$(e.currentTarget),n=$("#form-shipping-rule-item-detail-modal");n.modal("show"),$.ajax({type:"GET",url:t.data("url"),beforeSend:function(){n.find(".modal-title strong").html(""),n.find(".modal-body").html('<div class="w-100 text-center py-3"><div class="spinner-border" role="status">\n                    <span class="visually-hidden">Loading...</span>\n                  </div></div>')},success:function(e){e.error?Botble.showError(e.message):(n.find(".modal-body").html(e.data.html),n.find(".modal-title strong").html(e.message),Botble.initResources())},error:function(e){Botble.handleError(e)}})})),$(document).on("click","#save-shipping-rule-item-detail-button",(function(e){e.preventDefault();var t=$(e.currentTarget),n=$("#form-shipping-rule-item-detail-modal"),r=n.find("form");$.ajax({type:r.prop("method"),url:r.prop("action"),data:r.serialize(),beforeSend:function(){t.addClass("button-loading")},success:function(e){if(e.error)Botble.showError(e.message);else{var t=$(".table-shipping-rule-"+e.data.shipping_rule_id);t.find(".shipping-rule-item-"+e.data.id).length?t.find(".shipping-rule-item-"+e.data.id).replaceWith(e.data.html):t.prepend(e.data.html),n.modal("hide"),Botble.showSuccess(e.message)}},error:function(e){Botble.handleError(e)},complete:function(){t.removeClass("button-loading")}})})),$(document).on("click",".btn-confirm-delete-rule-item-modal-trigger",(function(e){e.preventDefault();var t=$("#confirm-delete-shipping-rule-item-modal");t.find(".item-label").text($(e.currentTarget).data("name")),t.find("#confirm-delete-shipping-rule-item-button").data("url",$(e.currentTarget).data("section")),t.modal("show")})),$(document).on("click","#confirm-delete-shipping-rule-item-button",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({type:"POST",url:t.data("url"),data:{_method:"DELETE"},success:function(e){if(e.error)Botble.showError(e.message);else{var t=$(".table-shipping-rule-"+e.data.shipping_rule_id);t.find(".shipping-rule-item-"+e.data.id).length&&t.find(".shipping-rule-item-"+e.data.id).fadeOut(500,(function(){$(this).remove()})),Botble.showSuccess(e.message)}$("#confirm-delete-shipping-rule-item-modal").modal("hide")},error:function(e){Botble.handleError(e)},complete:function(){t.removeClass("button-loading")}})})),$(document).find(".select-country-search").select2({width:"100%",dropdownParent:$("#select-country-modal")}),$(document).on("click",".btn-select-country",(function(e){e.preventDefault(),$("#select-country-modal").modal("show")})),$(document).on("click","#add-shipping-region-button",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading");var n=t.closest(".modal-content").find("form");$.ajax({type:"POST",url:n.prop("action"),data:n.serialize(),success:function(e){e.error?Botble.showError(e.message):(Botble.showSuccess(e.message),$(".wrapper-content").load(window.location.href+" .wrapper-content > *")),t.removeClass("button-loading"),$("#select-country-modal").modal("hide")},error:function(e){Botble.handleError(e),t.removeClass("button-loading")}})})),$(document).on("click","#add-shipping-rule-item-button",(function(t){t.preventDefault(),e($(t.currentTarget),$(t.currentTarget).closest(".modal-content").find("form"),"POST",$(t.currentTarget).data("shipping-id"))})),$(document).on("keyup",".base-price-rule-item",(function(e){var t=$(e.currentTarget).val();t&&!isNaN(t)||(t=0),$.each($(document).find(".support-shipping .rule-adjustment-price-item"),(function(e,n){var r=$(n).closest("tr").find(".shipping-price-district").val();r&&!isNaN(r)||(r=0),$(n).text(Botble.numberFormat(parseFloat(t)+parseFloat(r)),2)}))})),$(document).on("change","select[name=shipping_rule_id].shipping-rule-id",(function(e){e.preventDefault();var t=$(e.currentTarget),n=t.closest("form"),r=n.find('select[data-type="country"]'),i=t.find("option:selected").data("country");r.length?r.val()!=i&&r.val(i).trigger("change"):(r=n.find('input[name="country"]')).length&&r.val()!=i&&r.val(i)}))}}])&&t(n.prototype,r),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();$(document).ready((function(){(new n).init()}))})();