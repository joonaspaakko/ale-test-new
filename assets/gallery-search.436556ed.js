import { c as slugify, V as VueSlider, f as __unplugin_components_5, g as __vitePreload, h as __unplugin_components_4$1 } from "./gallery.db031907.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, e as createCommentVNode, aE as mergeProps, h as withModifiers, g as normalizeClass, F as Fragment, j as renderList, q as renderSlot, br as withKeys, x as createTextVNode, t as toDisplayString, a6 as toRefs, av as getCurrentInstance, K as ref, C as computed, L as watch, E as nextTick, aL as onMounted, _ as _export_sfc, r as resolveComponent, b as resolveDirective, w as withDirectives, u as vModelCheckbox, d as createVNode, n as normalizeStyle, i as createBlock, v as vShow } from "./lodash.1321b47a.js";
import { _ as __unplugin_components_1$2 } from "./gallery-findSubPageSource.65b5640c.js";
import { _ as __unplugin_components_0$3 } from "./gallery-page-title.a786f9b3.js";
import { t as timeStringToSeconds } from "./gallery-timeStringToSeconds.9aa0cb6a.js";
const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$a
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$9);
}
var __unplugin_components_4 = { name: "ic-round-square", render: render$6 };
const _hoisted_1$9 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M256 56c110.532 0 200 89.451 200 200c0 110.532-89.451 200-200 200c-110.532 0-200-89.451-200-200c0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80s80-35.817 80-80s-35.817-80-80-80z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$9
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$8);
}
var __unplugin_components_3$1 = { name: "fa-regular-dot-circle", render: render$5 };
const _hoisted_1$8 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$8
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$7);
}
var __unplugin_components_2$1 = { name: "fa-regular-circle", render: render$4 };
const _hoisted_1$7 = {
  viewBox: "0 0 320 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S19 224.1 32 224.1h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$7
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$6);
}
var __unplugin_components_1$1 = { name: "fa6-solid-sort-up", render: render$3 };
const _hoisted_1$6 = {
  viewBox: "0 0 320 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$6
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$5);
}
var __unplugin_components_0$2 = { name: "fa6-solid-sort-down", render: render$2 };
function isNullish(val) {
  return [null, void 0].indexOf(val) !== -1;
}
function useData(props, context, dep) {
  const { object, valueProp, mode } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const update = (val) => {
    iv.value = makeInternal(val);
    const externalVal = makeExternal(val);
    context.emit("change", externalVal, $this);
    context.emit("input", externalVal);
    context.emit("update:modelValue", externalVal);
  };
  const makeExternal = (val) => {
    if (object.value) {
      return val;
    }
    if (isNullish(val)) {
      return val;
    }
    return !Array.isArray(val) ? val[valueProp.value] : val.map((v) => v[valueProp.value]);
  };
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === "single" ? {} : [];
    }
    return val;
  };
  return {
    update
  };
}
function useValue(props, context) {
  const { value, modelValue, mode, valueProp } = toRefs(props);
  const iv = ref(mode.value !== "single" ? [] : {});
  const ev = modelValue && modelValue.value !== void 0 ? modelValue : value;
  const plainValue = computed(() => {
    return mode.value === "single" ? iv.value[valueProp.value] : iv.value.map((v) => v[valueProp.value]);
  });
  const textValue = computed(() => {
    return mode.value !== "single" ? iv.value.map((v) => v[valueProp.value]).join(",") : iv.value[valueProp.value];
  });
  return {
    iv,
    internalValue: iv,
    ev,
    externalValue: ev,
    textValue,
    plainValue
  };
}
function useSearch(props, context, dep) {
  const { regex } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const search = ref(null);
  const input = ref(null);
  const clearSearch = () => {
    search.value = "";
  };
  const handleSearchInput = (e) => {
    search.value = e.target.value;
  };
  const handleKeypress = (e) => {
    if (regex && regex.value) {
      let regexp = regex.value;
      if (typeof regexp === "string") {
        regexp = new RegExp(regexp);
      }
      if (!e.key.match(regexp)) {
        e.preventDefault();
      }
    }
  };
  const handlePaste = (e) => {
    if (regex && regex.value) {
      let clipboardData = e.clipboardData || window.clipboardData;
      let pastedData = clipboardData.getData("Text");
      let regexp = regex.value;
      if (typeof regexp === "string") {
        regexp = new RegExp(regexp);
      }
      if (!pastedData.split("").every((c) => !!c.match(regexp))) {
        e.preventDefault();
      }
    }
    context.emit("paste", e, $this);
  };
  watch(search, (val) => {
    if (!isOpen.value && val) {
      open();
    }
    context.emit("search-change", val, $this);
  });
  return {
    search,
    input,
    clearSearch,
    handleSearchInput,
    handleKeypress,
    handlePaste
  };
}
function usePointer$1(props, context, dep) {
  const { groupSelect, mode, groups, disabledProp } = toRefs(props);
  const pointer = ref(null);
  const setPointer = (option) => {
    if (option === void 0 || option !== null && option[disabledProp.value]) {
      return;
    }
    if (groups.value && option && option.group && (mode.value === "single" || !groupSelect.value)) {
      return;
    }
    pointer.value = option;
  };
  const clearPointer = () => {
    setPointer(null);
  };
  return {
    pointer,
    setPointer,
    clearPointer
  };
}
function normalize(str, strict = true) {
  return strict ? String(str).toLowerCase().trim() : String(str).normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();
}
function isObject(variable) {
  return Object.prototype.toString.call(variable) === "[object Object]";
}
function arraysEqual(array1, array2) {
  const array2Sorted = array2.slice().sort();
  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
    return value === array2Sorted[index];
  });
}
function useOptions(props, context, dep) {
  const {
    options,
    mode,
    trackBy: trackBy_,
    limit,
    hideSelected,
    createTag,
    createOption: createOption_,
    label,
    appendNewTag,
    appendNewOption: appendNewOption_,
    multipleLabel,
    object,
    loading,
    delay,
    resolveOnLoad,
    minChars,
    filterResults,
    clearOnSearch,
    clearOnSelect,
    valueProp,
    canDeselect,
    max,
    strict,
    closeOnSelect,
    groups: groupped,
    reverse,
    infinite,
    groupOptions,
    groupHideEmpty,
    groupSelect,
    onCreate,
    disabledProp,
    searchStart
  } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const ev = dep.ev;
  const search = dep.search;
  const clearSearch = dep.clearSearch;
  const update = dep.update;
  const pointer = dep.pointer;
  const clearPointer = dep.clearPointer;
  const focus = dep.focus;
  const deactivate = dep.deactivate;
  const close = dep.close;
  const ap = ref([]);
  const ro = ref([]);
  const resolving = ref(false);
  const searchWatcher = ref(null);
  const offset = ref(infinite.value && limit.value === -1 ? 10 : limit.value);
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false;
  });
  const appendNewOption = computed(() => {
    if (appendNewTag.value !== void 0) {
      return appendNewTag.value;
    } else if (appendNewOption_.value !== void 0) {
      return appendNewOption_.value;
    }
    return true;
  });
  const eo = computed(() => {
    if (groupped.value) {
      let groups = ro.value || [];
      let eo2 = [];
      groups.forEach((group) => {
        optionsToArray(group[groupOptions.value]).forEach((option) => {
          eo2.push(Object.assign({}, option, group[disabledProp.value] ? { [disabledProp.value]: true } : {}));
        });
      });
      return eo2;
    } else {
      let eo2 = optionsToArray(ro.value || []);
      if (ap.value.length) {
        eo2 = eo2.concat(ap.value);
      }
      return eo2;
    }
  });
  const fg = computed(() => {
    if (!groupped.value) {
      return [];
    }
    return filterGroups((ro.value || []).map((group, index) => {
      const arrayOptions = optionsToArray(group[groupOptions.value]);
      return {
        ...group,
        index,
        group: true,
        [groupOptions.value]: filterOptions(arrayOptions, false).map((o) => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
        __VISIBLE__: filterOptions(arrayOptions).map((o) => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {}))
      };
    }));
  });
  const pfo = computed(() => {
    let options2 = eo.value;
    if (reverse.value) {
      options2 = options2.reverse();
    }
    if (createdOption.value.length) {
      options2 = createdOption.value.concat(options2);
    }
    return filterOptions(options2);
  });
  const fo = computed(() => {
    let options2 = pfo.value;
    if (offset.value > 0) {
      options2 = options2.slice(0, offset.value);
    }
    return options2;
  });
  const hasSelected = computed(() => {
    switch (mode.value) {
      case "single":
        return !isNullish(iv.value[valueProp.value]);
      case "multiple":
      case "tags":
        return !isNullish(iv.value) && iv.value.length > 0;
    }
  });
  const multipleLabelText = computed(() => {
    return multipleLabel !== void 0 && multipleLabel.value !== void 0 ? multipleLabel.value(iv.value, $this) : iv.value && iv.value.length > 1 ? `${iv.value.length} options selected` : `1 option selected`;
  });
  const noOptions = computed(() => {
    return !eo.value.length && !resolving.value && !createdOption.value.length;
  });
  const noResults = computed(() => {
    return eo.value.length > 0 && fo.value.length == 0 && (search.value && groupped.value || !groupped.value);
  });
  const createdOption = computed(() => {
    if (createOption.value === false || !search.value) {
      return [];
    }
    return getOptionByTrackBy(search.value) !== -1 ? [] : [{
      [valueProp.value]: search.value,
      [label.value]: search.value,
      [trackBy.value]: search.value,
      __CREATE__: true
    }];
  });
  const trackBy = computed(() => {
    return trackBy_.value || label.value;
  });
  const nullValue = computed(() => {
    switch (mode.value) {
      case "single":
        return null;
      case "multiple":
      case "tags":
        return [];
    }
  });
  const busy = computed(() => {
    return loading.value || resolving.value;
  });
  const select = (option) => {
    if (typeof option !== "object") {
      option = getOption(option);
    }
    switch (mode.value) {
      case "single":
        update(option);
        break;
      case "multiple":
      case "tags":
        update(iv.value.concat(option));
        break;
    }
    context.emit("select", finalValue(option), option, $this);
  };
  const deselect = (option) => {
    if (typeof option !== "object") {
      option = getOption(option);
    }
    switch (mode.value) {
      case "single":
        clear();
        break;
      case "tags":
      case "multiple":
        update(Array.isArray(option) ? iv.value.filter((v) => option.map((o) => o[valueProp.value]).indexOf(v[valueProp.value]) === -1) : iv.value.filter((v) => v[valueProp.value] != option[valueProp.value]));
        break;
    }
    context.emit("deselect", finalValue(option), option, $this);
  };
  const finalValue = (option) => {
    return object.value ? option : option[valueProp.value];
  };
  const remove = (option) => {
    deselect(option);
  };
  const handleTagRemove = (option, e) => {
    if (e.button !== 0) {
      e.preventDefault();
      return;
    }
    remove(option);
  };
  const clear = () => {
    context.emit("clear", $this);
    update(nullValue.value);
  };
  const isSelected = (option) => {
    if (option.group !== void 0) {
      return mode.value === "single" ? false : areAllSelected(option[groupOptions.value]) && option[groupOptions.value].length;
    }
    switch (mode.value) {
      case "single":
        return !isNullish(iv.value) && iv.value[valueProp.value] == option[valueProp.value];
      case "tags":
      case "multiple":
        return !isNullish(iv.value) && iv.value.map((o) => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1;
    }
  };
  const isDisabled = (option) => {
    return option[disabledProp.value] === true;
  };
  const isMax = () => {
    if (max === void 0 || max.value === -1 || !hasSelected.value && max.value > 0) {
      return false;
    }
    return iv.value.length >= max.value;
  };
  const handleOptionClick = (option) => {
    if (isDisabled(option)) {
      return;
    }
    if (onCreate && onCreate.value && !isSelected(option) && option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
      option = onCreate.value(option, $this);
      if (option instanceof Promise) {
        resolving.value = true;
        option.then((result) => {
          resolving.value = false;
          handleOptionSelect(result);
        });
        return;
      }
    }
    handleOptionSelect(option);
  };
  const handleOptionSelect = (option) => {
    if (option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
    }
    switch (mode.value) {
      case "single":
        if (option && isSelected(option)) {
          if (canDeselect.value) {
            deselect(option);
          }
          return;
        }
        if (option) {
          handleOptionAppend(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (closeOnSelect.value) {
          clearPointer();
          close();
        }
        if (option) {
          select(option);
        }
        break;
      case "multiple":
        if (option && isSelected(option)) {
          deselect(option);
          return;
        }
        if (isMax()) {
          return;
        }
        if (option) {
          handleOptionAppend(option);
          select(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (hideSelected.value) {
          clearPointer();
        }
        if (closeOnSelect.value) {
          close();
        }
        break;
      case "tags":
        if (option && isSelected(option)) {
          deselect(option);
          return;
        }
        if (isMax()) {
          return;
        }
        if (option) {
          handleOptionAppend(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (option) {
          select(option);
        }
        if (hideSelected.value) {
          clearPointer();
        }
        if (closeOnSelect.value) {
          close();
        }
        break;
    }
    if (!closeOnSelect.value) {
      focus();
    }
  };
  const handleGroupClick = (group) => {
    if (isDisabled(group) || mode.value === "single" || !groupSelect.value) {
      return;
    }
    switch (mode.value) {
      case "multiple":
      case "tags":
        if (areAllEnabledSelected(group[groupOptions.value])) {
          deselect(group[groupOptions.value]);
        } else {
          select(
            group[groupOptions.value].filter((o) => iv.value.map((v) => v[valueProp.value]).indexOf(o[valueProp.value]) === -1).filter((o) => !o[disabledProp.value]).filter((o, k) => iv.value.length + 1 + k <= max.value || max.value === -1)
          );
        }
        break;
    }
    if (closeOnSelect.value) {
      deactivate();
    }
  };
  const handleOptionAppend = (option) => {
    if (getOption(option[valueProp.value]) === void 0 && createOption.value) {
      context.emit("tag", option[valueProp.value], $this);
      context.emit("option", option[valueProp.value], $this);
      if (appendNewOption.value) {
        appendOption(option);
      }
      clearSearch();
    }
  };
  const selectAll = () => {
    if (mode.value === "single") {
      return;
    }
    select(fo.value);
  };
  const areAllEnabledSelected = (options2) => {
    return options2.find((o) => !isSelected(o) && !o[disabledProp.value]) === void 0;
  };
  const areAllSelected = (options2) => {
    return options2.find((o) => !isSelected(o)) === void 0;
  };
  const getOption = (val) => {
    return eo.value[eo.value.map((o) => String(o[valueProp.value])).indexOf(String(val))];
  };
  const getOptionByTrackBy = (val, norm = true) => {
    return eo.value.map((o) => parseInt(o[trackBy.value]) == o[trackBy.value] ? parseInt(o[trackBy.value]) : o[trackBy.value]).indexOf(
      parseInt(val) == val ? parseInt(val) : val
    );
  };
  const shouldHideOption = (option) => {
    return ["tags", "multiple"].indexOf(mode.value) !== -1 && hideSelected.value && isSelected(option);
  };
  const appendOption = (option) => {
    ap.value.push(option);
  };
  const filterGroups = (groups) => {
    return groupHideEmpty.value ? groups.filter(
      (g) => search.value ? g.__VISIBLE__.length : g[groupOptions.value].length
    ) : groups.filter((g) => search.value ? g.__VISIBLE__.length : true);
  };
  const filterOptions = (options2, excludeHideSelected = true) => {
    let fo2 = options2;
    if (search.value && filterResults.value) {
      fo2 = fo2.filter((option) => {
        return searchStart.value ? normalize(option[trackBy.value], strict.value).startsWith(normalize(search.value, strict.value)) : normalize(option[trackBy.value], strict.value).indexOf(normalize(search.value, strict.value)) !== -1;
      });
    }
    if (hideSelected.value && excludeHideSelected) {
      fo2 = fo2.filter((option) => !shouldHideOption(option));
    }
    return fo2;
  };
  const optionsToArray = (options2) => {
    let uo = options2;
    if (isObject(uo)) {
      uo = Object.keys(uo).map((key) => {
        let val = uo[key];
        return { [valueProp.value]: key, [trackBy.value]: val, [label.value]: val };
      });
    }
    uo = uo.map((val) => {
      return typeof val === "object" ? val : { [valueProp.value]: val, [trackBy.value]: val, [label.value]: val };
    });
    return uo;
  };
  const initInternalValue = () => {
    if (!isNullish(ev.value)) {
      iv.value = makeInternal(ev.value);
    }
  };
  const resolveOptions = (callback) => {
    resolving.value = true;
    return new Promise((resolve, reject) => {
      options.value(search.value, $this).then((response) => {
        ro.value = response || [];
        if (typeof callback == "function") {
          callback(response);
        }
        resolving.value = false;
      }).catch((e) => {
        console.error(e);
        ro.value = [];
        resolving.value = false;
      }).finally(() => {
        resolve();
      });
    });
  };
  const refreshLabels = () => {
    if (!hasSelected.value) {
      return;
    }
    if (mode.value === "single") {
      let option = getOption(iv.value[valueProp.value]);
      if (option !== void 0) {
        let newLabel = option[label.value];
        iv.value[label.value] = newLabel;
        if (object.value) {
          ev.value[label.value] = newLabel;
        }
      }
    } else {
      iv.value.forEach((val, i) => {
        let option = getOption(iv.value[i][valueProp.value]);
        if (option !== void 0) {
          let newLabel = option[label.value];
          iv.value[i][label.value] = newLabel;
          if (object.value) {
            ev.value[i][label.value] = newLabel;
          }
        }
      });
    }
  };
  const refreshOptions = (callback) => {
    resolveOptions(callback);
  };
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === "single" ? {} : [];
    }
    if (object.value) {
      return val;
    }
    return mode.value === "single" ? getOption(val) || {} : val.filter((v) => !!getOption(v)).map((v) => getOption(v));
  };
  const initSearchWatcher = () => {
    searchWatcher.value = watch(search, (query) => {
      if (query.length < minChars.value || !query && minChars.value !== 0) {
        return;
      }
      resolving.value = true;
      if (clearOnSearch.value) {
        ro.value = [];
      }
      setTimeout(() => {
        if (query != search.value) {
          return;
        }
        options.value(search.value, $this).then((response) => {
          if (query == search.value || !search.value) {
            ro.value = response;
            pointer.value = fo.value.filter((o) => o[disabledProp.value] !== true)[0] || null;
            resolving.value = false;
          }
        }).catch((e) => {
          console.error(e);
        });
      }, delay.value);
    }, { flush: "sync" });
  };
  if (mode.value !== "single" && !isNullish(ev.value) && !Array.isArray(ev.value)) {
    throw new Error(`v-model must be an array when using "${mode.value}" mode`);
  }
  if (options && typeof options.value == "function") {
    if (resolveOnLoad.value) {
      resolveOptions(initInternalValue);
    } else if (object.value == true) {
      initInternalValue();
    }
  } else {
    ro.value = options.value;
    initInternalValue();
  }
  if (delay.value > -1) {
    initSearchWatcher();
  }
  watch(delay, (value, old) => {
    if (searchWatcher.value) {
      searchWatcher.value();
    }
    if (value >= 0) {
      initSearchWatcher();
    }
  });
  watch(ev, (newValue) => {
    if (isNullish(newValue)) {
      iv.value = makeInternal(newValue);
      return;
    }
    switch (mode.value) {
      case "single":
        if (object.value ? newValue[valueProp.value] != iv.value[valueProp.value] : newValue != iv.value[valueProp.value]) {
          iv.value = makeInternal(newValue);
        }
        break;
      case "multiple":
      case "tags":
        if (!arraysEqual(object.value ? newValue.map((o) => o[valueProp.value]) : newValue, iv.value.map((o) => o[valueProp.value]))) {
          iv.value = makeInternal(newValue);
        }
        break;
    }
  }, { deep: true });
  watch(options, (n, o) => {
    if (typeof props.options === "function") {
      if (resolveOnLoad.value && (!o || n && n.toString() !== o.toString())) {
        resolveOptions();
      }
    } else {
      ro.value = props.options;
      if (!Object.keys(iv.value).length) {
        initInternalValue();
      }
      refreshLabels();
    }
  });
  watch(label, refreshLabels);
  return {
    pfo,
    fo,
    filteredOptions: fo,
    hasSelected,
    multipleLabelText,
    eo,
    extendedOptions: eo,
    fg,
    filteredGroups: fg,
    noOptions,
    noResults,
    resolving,
    busy,
    offset,
    select,
    deselect,
    remove,
    selectAll,
    clear,
    isSelected,
    isDisabled,
    isMax,
    getOption,
    handleOptionClick,
    handleGroupClick,
    handleTagRemove,
    refreshOptions,
    resolveOptions,
    refreshLabels
  };
}
function usePointer(props, context, dep) {
  const {
    valueProp,
    showOptions,
    searchable,
    groupLabel,
    groups: groupped,
    mode,
    groupSelect,
    disabledProp
  } = toRefs(props);
  const fo = dep.fo;
  const fg = dep.fg;
  const handleOptionClick = dep.handleOptionClick;
  const handleGroupClick = dep.handleGroupClick;
  const search = dep.search;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const multiselect = dep.multiselect;
  const isOpen = dep.isOpen;
  const options = computed(() => {
    return fo.value.filter((o) => !o[disabledProp.value]);
  });
  const groups = computed(() => {
    return fg.value.filter((o) => !o[disabledProp.value]);
  });
  const canPointGroups = computed(() => {
    return mode.value !== "single" && groupSelect.value;
  });
  const isPointerGroup = computed(() => {
    return pointer.value && pointer.value.group;
  });
  const currentGroup = computed(() => {
    return getParentGroup(pointer.value);
  });
  const prevGroup = computed(() => {
    const group = isPointerGroup.value ? pointer.value : getParentGroup(pointer.value);
    const groupIndex = groups.value.map((g) => g[groupLabel.value]).indexOf(group[groupLabel.value]);
    let prevGroup2 = groups.value[groupIndex - 1];
    if (prevGroup2 === void 0) {
      prevGroup2 = lastGroup.value;
    }
    return prevGroup2;
  });
  const nextGroup = computed(() => {
    let nextIndex = groups.value.map((g) => g.label).indexOf(isPointerGroup.value ? pointer.value[groupLabel.value] : getParentGroup(pointer.value)[groupLabel.value]) + 1;
    if (groups.value.length <= nextIndex) {
      nextIndex = 0;
    }
    return groups.value[nextIndex];
  });
  const lastGroup = computed(() => {
    return [...groups.value].slice(-1)[0];
  });
  const currentGroupFirstEnabledOption = computed(() => {
    return pointer.value.__VISIBLE__.filter((o) => !o[disabledProp.value])[0];
  });
  const currentGroupPrevEnabledOption = computed(() => {
    const options2 = currentGroup.value.__VISIBLE__.filter((o) => !o[disabledProp.value]);
    return options2[options2.map((o) => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1];
  });
  const currentGroupNextEnabledOption = computed(() => {
    const options2 = getParentGroup(pointer.value).__VISIBLE__.filter((o) => !o[disabledProp.value]);
    return options2[options2.map((o) => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1];
  });
  const prevGroupLastEnabledOption = computed(() => {
    return [...prevGroup.value.__VISIBLE__.filter((o) => !o[disabledProp.value])].slice(-1)[0];
  });
  const lastGroupLastEnabledOption = computed(() => {
    return [...lastGroup.value.__VISIBLE__.filter((o) => !o[disabledProp.value])].slice(-1)[0];
  });
  const isPointed = (option) => {
    return !!pointer.value && (!option.group && pointer.value[valueProp.value] == option[valueProp.value] || option.group !== void 0 && pointer.value[groupLabel.value] == option[groupLabel.value]) ? true : void 0;
  };
  const setPointerFirst = () => {
    setPointer(options.value[0] || null);
  };
  const selectPointer = () => {
    if (!pointer.value || pointer.value[disabledProp.value] === true) {
      return;
    }
    if (isPointerGroup.value) {
      handleGroupClick(pointer.value);
    } else {
      handleOptionClick(pointer.value);
    }
  };
  const forwardPointer = () => {
    if (pointer.value === null) {
      setPointer((groupped.value && canPointGroups.value ? groups.value[0] : options.value[0]) || null);
    } else if (groupped.value && canPointGroups.value) {
      let nextPointer = isPointerGroup.value ? currentGroupFirstEnabledOption.value : currentGroupNextEnabledOption.value;
      if (nextPointer === void 0) {
        nextPointer = nextGroup.value;
      }
      setPointer(nextPointer || null);
    } else {
      let next = options.value.map((o) => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1;
      if (options.value.length <= next) {
        next = 0;
      }
      setPointer(options.value[next] || null);
    }
    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };
  const backwardPointer = () => {
    if (pointer.value === null) {
      let prevPointer = options.value[options.value.length - 1];
      if (groupped.value && canPointGroups.value) {
        prevPointer = lastGroupLastEnabledOption.value;
        if (prevPointer === void 0) {
          prevPointer = lastGroup.value;
        }
      }
      setPointer(prevPointer || null);
    } else if (groupped.value && canPointGroups.value) {
      let prevPointer = isPointerGroup.value ? prevGroupLastEnabledOption.value : currentGroupPrevEnabledOption.value;
      if (prevPointer === void 0) {
        prevPointer = isPointerGroup.value ? prevGroup.value : currentGroup.value;
      }
      setPointer(prevPointer || null);
    } else {
      let prevIndex = options.value.map((o) => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1;
      if (prevIndex < 0) {
        prevIndex = options.value.length - 1;
      }
      setPointer(options.value[prevIndex] || null);
    }
    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };
  const getParentGroup = (option) => {
    return groups.value.find((group) => {
      return group.__VISIBLE__.map((o) => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1;
    });
  };
  const adjustWrapperScrollToPointer = () => {
    let pointedOption = multiselect.value.querySelector(`[data-pointed]`);
    if (!pointedOption) {
      return;
    }
    let wrapper = pointedOption.parentElement.parentElement;
    if (groupped.value) {
      wrapper = isPointerGroup.value ? pointedOption.parentElement.parentElement.parentElement : pointedOption.parentElement.parentElement.parentElement.parentElement;
    }
    if (pointedOption.offsetTop + pointedOption.offsetHeight > wrapper.clientHeight + wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop + pointedOption.offsetHeight - wrapper.clientHeight;
    }
    if (pointedOption.offsetTop < wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop;
    }
  };
  watch(search, (val) => {
    if (searchable.value) {
      if (val.length && showOptions.value) {
        setPointerFirst();
      } else {
        clearPointer();
      }
    }
  });
  watch(isOpen, (val) => {
    if (val) {
      let firstSelected = multiselect.value.querySelectorAll(`[data-selected]`)[0];
      if (!firstSelected) {
        return;
      }
      let wrapper = firstSelected.parentElement.parentElement;
      nextTick(() => {
        if (wrapper.scrollTop > 0) {
          return;
        }
        wrapper.scrollTop = firstSelected.offsetTop;
      });
    }
  });
  return {
    pointer,
    canPointGroups,
    isPointed,
    setPointerFirst,
    selectPointer,
    forwardPointer,
    backwardPointer
  };
}
function useDropdown(props, context, dep) {
  const { disabled } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const isOpen = ref(false);
  const open = () => {
    if (isOpen.value || disabled.value) {
      return;
    }
    isOpen.value = true;
    context.emit("open", $this);
  };
  const close = () => {
    if (!isOpen.value) {
      return;
    }
    isOpen.value = false;
    context.emit("close", $this);
  };
  return {
    isOpen,
    open,
    close
  };
}
function useMultiselect(props, context, dep) {
  const { searchable, disabled } = toRefs(props);
  const input = dep.input;
  const open = dep.open;
  const close = dep.close;
  const clearSearch = dep.clearSearch;
  const isOpen = dep.isOpen;
  const multiselect = ref(null);
  const tags = ref(null);
  const isActive = ref(false);
  const mouseClicked = ref(false);
  const tabindex = computed(() => {
    return searchable.value || disabled.value ? -1 : 0;
  });
  const blur = () => {
    if (searchable.value) {
      input.value.blur();
    }
    multiselect.value.blur();
  };
  const focus = () => {
    if (searchable.value && !disabled.value) {
      input.value.focus();
    }
  };
  const activate = (shouldOpen = true) => {
    if (disabled.value) {
      return;
    }
    isActive.value = true;
    if (shouldOpen) {
      open();
    }
  };
  const deactivate = () => {
    isActive.value = false;
    setTimeout(() => {
      if (!isActive.value) {
        close();
        clearSearch();
      }
    }, 1);
  };
  const handleFocusIn = () => {
    activate(mouseClicked.value);
  };
  const handleFocusOut = () => {
    deactivate();
  };
  const handleCaretClick = () => {
    deactivate();
    blur();
  };
  const handleMousedown = (e) => {
    mouseClicked.value = true;
    if (isOpen.value && (e.target.isEqualNode(multiselect.value) || e.target.isEqualNode(tags.value))) {
      setTimeout(() => {
        deactivate();
      }, 0);
    } else if (document.activeElement.isEqualNode(multiselect.value) && !isOpen.value) {
      activate();
    }
    setTimeout(() => {
      mouseClicked.value = false;
    }, 0);
  };
  return {
    multiselect,
    tags,
    tabindex,
    isActive,
    mouseClicked,
    blur,
    focus,
    activate,
    deactivate,
    handleFocusIn,
    handleFocusOut,
    handleCaretClick,
    handleMousedown
  };
}
function useKeyboard(props, context, dep) {
  const {
    mode,
    addTagOn,
    openDirection,
    searchable,
    showOptions,
    valueProp,
    groups: groupped,
    addOptionOn: addOptionOn_,
    createTag,
    createOption: createOption_,
    reverse
  } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const update = dep.update;
  const search = dep.search;
  const setPointer = dep.setPointer;
  const selectPointer = dep.selectPointer;
  const backwardPointer = dep.backwardPointer;
  const forwardPointer = dep.forwardPointer;
  const multiselect = dep.multiselect;
  const tags = dep.tags;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const blur = dep.blur;
  const fo = dep.fo;
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false;
  });
  const addOptionOn = computed(() => {
    if (addTagOn.value !== void 0) {
      return addTagOn.value;
    } else if (addOptionOn_.value !== void 0) {
      return addOptionOn_.value;
    }
    return ["enter"];
  });
  const preparePointer = () => {
    if (mode.value === "tags" && !showOptions.value && createOption.value && searchable.value && !groupped.value) {
      setPointer(fo.value[fo.value.map((o) => o[valueProp.value]).indexOf(search.value)]);
    }
  };
  const handleKeydown = (e) => {
    context.emit("keydown", e, $this);
    let tagList;
    let activeIndex;
    if (["ArrowLeft", "ArrowRight", "Enter"].indexOf(e.key) !== -1 && mode.value === "tags") {
      tagList = [...multiselect.value.querySelectorAll(`[data-tags] > *`)].filter((e2) => e2 !== tags.value);
      activeIndex = tagList.findIndex((e2) => e2 === document.activeElement);
    }
    switch (e.key) {
      case "Backspace":
        if (mode.value === "single") {
          return;
        }
        if (searchable.value && [null, ""].indexOf(search.value) === -1) {
          return;
        }
        if (iv.value.length === 0) {
          return;
        }
        update([...iv.value].slice(0, -1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex !== -1 && activeIndex !== void 0) {
          update([...iv.value].filter((v, k) => k !== activeIndex));
          if (activeIndex === tagList.length - 1) {
            if (tagList.length - 1) {
              tagList[tagList.length - 2].focus();
            } else if (searchable.value) {
              tags.value.querySelector("input").focus();
            } else {
              multiselect.value.focus();
            }
          }
          return;
        }
        if (addOptionOn.value.indexOf("enter") === -1 && createOption.value) {
          return;
        }
        preparePointer();
        selectPointer();
        break;
      case " ":
        if (!createOption.value && !searchable.value) {
          e.preventDefault();
          preparePointer();
          selectPointer();
          return;
        }
        if (!createOption.value) {
          return false;
        }
        if (addOptionOn.value.indexOf("space") === -1 && createOption.value) {
          return;
        }
        e.preventDefault();
        preparePointer();
        selectPointer();
        break;
      case "Tab":
      case ";":
      case ",":
        if (addOptionOn.value.indexOf(e.key.toLowerCase()) === -1 || !createOption.value) {
          return;
        }
        preparePointer();
        selectPointer();
        e.preventDefault();
        break;
      case "Escape":
        blur();
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!showOptions.value) {
          return;
        }
        if (!isOpen.value) {
          open();
        }
        backwardPointer();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!showOptions.value) {
          return;
        }
        if (!isOpen.value) {
          open();
        }
        forwardPointer();
        break;
      case "ArrowLeft":
        if (searchable.value && tags.value.querySelector("input").selectionStart || e.shiftKey || mode.value !== "tags" || !iv.value || !iv.value.length) {
          return;
        }
        e.preventDefault();
        if (activeIndex === -1) {
          tagList[tagList.length - 1].focus();
        } else if (activeIndex > 0) {
          tagList[activeIndex - 1].focus();
        }
        break;
      case "ArrowRight":
        if (activeIndex === -1 || e.shiftKey || mode.value !== "tags" || !iv.value || !iv.value.length) {
          return;
        }
        e.preventDefault();
        if (tagList.length > activeIndex + 1) {
          tagList[activeIndex + 1].focus();
        } else if (searchable.value) {
          tags.value.querySelector("input").focus();
        } else if (!searchable.value) {
          multiselect.value.focus();
        }
        break;
    }
  };
  const handleKeyup = (e) => {
    context.emit("keyup", e, $this);
  };
  return {
    handleKeydown,
    handleKeyup,
    preparePointer
  };
}
function useClasses(props, context, dependencies) {
  const {
    classes: classes_,
    disabled,
    openDirection,
    showOptions
  } = toRefs(props);
  const isOpen = dependencies.isOpen;
  const isPointed = dependencies.isPointed;
  const isSelected = dependencies.isSelected;
  const isDisabled = dependencies.isDisabled;
  const isActive = dependencies.isActive;
  const canPointGroups = dependencies.canPointGroups;
  const resolving = dependencies.resolving;
  const fo = dependencies.fo;
  const classes = computed(() => ({
    container: "multiselect",
    containerDisabled: "is-disabled",
    containerOpen: "is-open",
    containerOpenTop: "is-open-top",
    containerActive: "is-active",
    singleLabel: "multiselect-single-label",
    singleLabelText: "multiselect-single-label-text",
    multipleLabel: "multiselect-multiple-label",
    search: "multiselect-search",
    tags: "multiselect-tags",
    tag: "multiselect-tag",
    tagDisabled: "is-disabled",
    tagRemove: "multiselect-tag-remove",
    tagRemoveIcon: "multiselect-tag-remove-icon",
    tagsSearchWrapper: "multiselect-tags-search-wrapper",
    tagsSearch: "multiselect-tags-search",
    tagsSearchCopy: "multiselect-tags-search-copy",
    placeholder: "multiselect-placeholder",
    caret: "multiselect-caret",
    caretOpen: "is-open",
    clear: "multiselect-clear",
    clearIcon: "multiselect-clear-icon",
    spinner: "multiselect-spinner",
    inifinite: "multiselect-inifite",
    inifiniteSpinner: "multiselect-inifite-spinner",
    dropdown: "multiselect-dropdown",
    dropdownTop: "is-top",
    dropdownHidden: "is-hidden",
    options: "multiselect-options",
    optionsTop: "is-top",
    group: "multiselect-group",
    groupLabel: "multiselect-group-label",
    groupLabelPointable: "is-pointable",
    groupLabelPointed: "is-pointed",
    groupLabelSelected: "is-selected",
    groupLabelDisabled: "is-disabled",
    groupLabelSelectedPointed: "is-selected is-pointed",
    groupLabelSelectedDisabled: "is-selected is-disabled",
    groupOptions: "multiselect-group-options",
    option: "multiselect-option",
    optionPointed: "is-pointed",
    optionSelected: "is-selected",
    optionDisabled: "is-disabled",
    optionSelectedPointed: "is-selected is-pointed",
    optionSelectedDisabled: "is-selected is-disabled",
    noOptions: "multiselect-no-options",
    noResults: "multiselect-no-results",
    fakeInput: "multiselect-fake-input",
    spacer: "multiselect-spacer",
    ...classes_.value
  }));
  const showDropdown = computed(() => {
    return !!(isOpen.value && showOptions.value && (!resolving.value || resolving.value && fo.value.length));
  });
  const classList = computed(() => {
    const c = classes.value;
    return {
      container: [c.container].concat(disabled.value ? c.containerDisabled : []).concat(showDropdown.value && openDirection.value === "top" ? c.containerOpenTop : []).concat(showDropdown.value && openDirection.value !== "top" ? c.containerOpen : []).concat(isActive.value ? c.containerActive : []),
      spacer: c.spacer,
      singleLabel: c.singleLabel,
      singleLabelText: c.singleLabelText,
      multipleLabel: c.multipleLabel,
      search: c.search,
      tags: c.tags,
      tag: [c.tag].concat(disabled.value ? c.tagDisabled : []),
      tagRemove: c.tagRemove,
      tagRemoveIcon: c.tagRemoveIcon,
      tagsSearchWrapper: c.tagsSearchWrapper,
      tagsSearch: c.tagsSearch,
      tagsSearchCopy: c.tagsSearchCopy,
      placeholder: c.placeholder,
      caret: [c.caret].concat(isOpen.value ? c.caretOpen : []),
      clear: c.clear,
      clearIcon: c.clearIcon,
      spinner: c.spinner,
      inifinite: c.inifinite,
      inifiniteSpinner: c.inifiniteSpinner,
      dropdown: [c.dropdown].concat(openDirection.value === "top" ? c.dropdownTop : []).concat(!isOpen.value || !showOptions.value || !showDropdown.value ? c.dropdownHidden : []),
      options: [c.options].concat(openDirection.value === "top" ? c.optionsTop : []),
      group: c.group,
      groupLabel: (g) => {
        let groupLabel = [c.groupLabel];
        if (isPointed(g)) {
          groupLabel.push(isSelected(g) ? c.groupLabelSelectedPointed : c.groupLabelPointed);
        } else if (isSelected(g) && canPointGroups.value) {
          groupLabel.push(isDisabled(g) ? c.groupLabelSelectedDisabled : c.groupLabelSelected);
        } else if (isDisabled(g)) {
          groupLabel.push(c.groupLabelDisabled);
        }
        if (canPointGroups.value) {
          groupLabel.push(c.groupLabelPointable);
        }
        return groupLabel;
      },
      groupOptions: c.groupOptions,
      option: (o, g) => {
        let option = [c.option];
        if (isPointed(o)) {
          option.push(isSelected(o) ? c.optionSelectedPointed : c.optionPointed);
        } else if (isSelected(o)) {
          option.push(isDisabled(o) ? c.optionSelectedDisabled : c.optionSelected);
        } else if (isDisabled(o) || g && isDisabled(g)) {
          option.push(c.optionDisabled);
        }
        return option;
      },
      noOptions: c.noOptions,
      noResults: c.noResults,
      fakeInput: c.fakeInput
    };
  });
  return {
    classList,
    showDropdown
  };
}
function useScroll$1(props, context, dep) {
  const {
    limit,
    infinite
  } = toRefs(props);
  const isOpen = dep.isOpen;
  const offset = dep.offset;
  const search = dep.search;
  const pfo = dep.pfo;
  const eo = dep.eo;
  const observer = ref(null);
  const infiniteLoader = ref(null);
  const hasMore = computed(() => {
    return offset.value < pfo.value.length;
  });
  const handleIntersectionObserver = (entries) => {
    const { isIntersecting, target } = entries[0];
    if (isIntersecting) {
      const parent = target.offsetParent;
      const scrollTop = parent.scrollTop;
      offset.value += limit.value == -1 ? 10 : limit.value;
      nextTick(() => {
        parent.scrollTop = scrollTop;
      });
    }
  };
  const observe = () => {
    if (isOpen.value && offset.value < pfo.value.length) {
      observer.value.observe(infiniteLoader.value);
    } else if (!isOpen.value && observer.value) {
      observer.value.disconnect();
    }
  };
  watch(isOpen, () => {
    if (!infinite.value) {
      return;
    }
    observe();
  });
  watch(search, () => {
    if (!infinite.value) {
      return;
    }
    offset.value = limit.value;
    observe();
  }, { flush: "post" });
  watch(eo, () => {
    if (!infinite.value) {
      return;
    }
    observe();
  }, { immediate: false, flush: "post" });
  onMounted(() => {
    if (window && window.IntersectionObserver) {
      observer.value = new IntersectionObserver(handleIntersectionObserver);
    }
  });
  return {
    hasMore,
    infiniteLoader
  };
}
function useScroll(props, context, dep) {
  const { placeholder, id, valueProp, label: labelProp, mode, groupLabel } = toRefs(props);
  const pointer = dep.pointer;
  dep.iv;
  dep.hasSelected;
  dep.multipleLabelText;
  dep.isOpen;
  const label = ref(null);
  const ariaOwns = computed(() => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-options");
    return texts.join("-");
  });
  const ariaActiveDescendant = computed(() => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    if (pointer.value) {
      texts.push(pointer.value.group ? "multiselect-group" : "multiselect-option");
      texts.push(pointer.value.group ? pointer.value.index : pointer.value[valueProp.value]);
      return texts.join("-");
    }
  });
  const ariaPlaceholder = computed(() => {
    return placeholder.value;
  });
  const ariaMultiselectable = computed(() => {
    return mode.value !== "single";
  });
  const ariaOptionId = (option) => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-option");
    texts.push(option[valueProp.value]);
    return texts.join("-");
  };
  const ariaGroupId = (option) => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-group");
    texts.push(option.index);
    return texts.join("-");
  };
  const ariaOptionLabel = (option) => {
    let texts = [];
    texts.push(option[labelProp.value]);
    return texts.join(" ");
  };
  const ariaGroupLabel = (group) => {
    let texts = [];
    texts.push(group[groupLabel.value]);
    return texts.join(" ");
  };
  const ariaTagLabel = (label2) => {
    return `${label2} \u274E`;
  };
  onMounted(() => {
    if (id && id.value && document && document.querySelector) {
      let forTag = document.querySelector(`[for="${id.value}"]`);
      label.value = forTag ? forTag.innerText : null;
    }
  });
  return {
    ariaOwns,
    ariaPlaceholder,
    ariaMultiselectable,
    ariaActiveDescendant,
    ariaOptionId,
    ariaOptionLabel,
    ariaGroupId,
    ariaGroupLabel,
    ariaTagLabel
  };
}
function resolveDeps(props, context, features, deps = {}) {
  features.forEach((composable) => {
    if (composable) {
      deps = {
        ...deps,
        ...composable(props, context, deps)
      };
    }
  });
  return deps;
}
var script = {
  name: "Multiselect",
  emits: [
    "paste",
    "open",
    "close",
    "select",
    "deselect",
    "input",
    "search-change",
    "tag",
    "option",
    "update:modelValue",
    "change",
    "clear",
    "keydown",
    "keyup"
  ],
  props: {
    value: {
      required: false
    },
    modelValue: {
      required: false
    },
    options: {
      type: [Array, Object, Function],
      required: false,
      default: () => []
    },
    id: {
      type: [String, Number],
      required: false
    },
    name: {
      type: [String, Number],
      required: false,
      default: "multiselect"
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: "label"
    },
    trackBy: {
      type: String,
      required: false,
      default: void 0
    },
    valueProp: {
      type: String,
      required: false,
      default: "value"
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    mode: {
      type: String,
      required: false,
      default: "single"
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
    limit: {
      type: Number,
      required: false,
      default: -1
    },
    hideSelected: {
      type: Boolean,
      required: false,
      default: true
    },
    createTag: {
      type: Boolean,
      required: false,
      default: void 0
    },
    createOption: {
      type: Boolean,
      required: false,
      default: void 0
    },
    appendNewTag: {
      type: Boolean,
      required: false,
      default: void 0
    },
    appendNewOption: {
      type: Boolean,
      required: false,
      default: void 0
    },
    addTagOn: {
      type: Array,
      required: false,
      default: void 0
    },
    addOptionOn: {
      type: Array,
      required: false,
      default: void 0
    },
    caret: {
      type: Boolean,
      required: false,
      default: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    noOptionsText: {
      type: String,
      required: false,
      default: "The list is empty"
    },
    noResultsText: {
      type: String,
      required: false,
      default: "No results found"
    },
    multipleLabel: {
      type: Function,
      required: false
    },
    object: {
      type: Boolean,
      required: false,
      default: false
    },
    delay: {
      type: Number,
      required: false,
      default: -1
    },
    minChars: {
      type: Number,
      required: false,
      default: 0
    },
    resolveOnLoad: {
      type: Boolean,
      required: false,
      default: true
    },
    filterResults: {
      type: Boolean,
      required: false,
      default: true
    },
    clearOnSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    clearOnSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    canDeselect: {
      type: Boolean,
      required: false,
      default: true
    },
    canClear: {
      type: Boolean,
      required: false,
      default: true
    },
    max: {
      type: Number,
      required: false,
      default: -1
    },
    showOptions: {
      type: Boolean,
      required: false,
      default: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    openDirection: {
      type: String,
      required: false,
      default: "bottom"
    },
    nativeSupport: {
      type: Boolean,
      required: false,
      default: false
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    strict: {
      type: Boolean,
      required: false,
      default: true
    },
    closeOnSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    autocomplete: {
      type: String,
      required: false
    },
    groups: {
      type: Boolean,
      required: false,
      default: false
    },
    groupLabel: {
      type: String,
      required: false,
      default: "label"
    },
    groupOptions: {
      type: String,
      required: false,
      default: "options"
    },
    groupHideEmpty: {
      type: Boolean,
      required: false,
      default: false
    },
    groupSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    inputType: {
      type: String,
      required: false,
      default: "text"
    },
    attrs: {
      required: false,
      type: Object,
      default: () => ({})
    },
    onCreate: {
      required: false,
      type: Function
    },
    disabledProp: {
      type: String,
      required: false,
      default: "disabled"
    },
    searchStart: {
      type: Boolean,
      required: false,
      default: false
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false
    },
    regex: {
      type: [Object, String, RegExp],
      required: false,
      default: void 0
    },
    rtl: {
      type: Boolean,
      required: false,
      default: false
    },
    infinite: {
      type: Boolean,
      required: false,
      default: false
    },
    aria: {
      required: false,
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    return resolveDeps(props, context, [
      useValue,
      usePointer$1,
      useDropdown,
      useSearch,
      useData,
      useMultiselect,
      useOptions,
      useScroll$1,
      usePointer,
      useKeyboard,
      useClasses,
      useScroll
    ]);
  }
};
const _hoisted_1$5 = ["tabindex", "id", "dir", "aria-owns", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable", "role"];
const _hoisted_2$5 = ["type", "modelValue", "value", "autocomplete", "id", "aria-owns", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_3$4 = ["onKeyup", "aria-label"];
const _hoisted_4$3 = ["onClick"];
const _hoisted_5$3 = ["type", "modelValue", "value", "id", "autocomplete", "aria-owns", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_6$3 = ["innerHTML"];
const _hoisted_7$2 = ["innerHTML"];
const _hoisted_8$2 = ["id"];
const _hoisted_9$1 = ["id", "aria-label", "aria-selected"];
const _hoisted_10$1 = ["data-pointed", "onMouseenter", "onClick"];
const _hoisted_11$1 = ["innerHTML"];
const _hoisted_12 = ["aria-label"];
const _hoisted_13 = ["data-pointed", "data-selected", "onMouseenter", "onClick", "id", "aria-selected", "aria-label"];
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = ["data-pointed", "data-selected", "onMouseenter", "onClick", "id", "aria-selected", "aria-label"];
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = ["innerHTML"];
const _hoisted_19 = ["value"];
const _hoisted_20 = ["name", "value"];
const _hoisted_21 = ["name", "value"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "multiselect",
    tabindex: _ctx.tabindex,
    class: _ctx.classList.container,
    id: $props.searchable ? void 0 : $props.id,
    dir: $props.rtl ? "rtl" : void 0,
    onFocusin: _cache[9] || (_cache[9] = (...args) => _ctx.handleFocusIn && _ctx.handleFocusIn(...args)),
    onFocusout: _cache[10] || (_cache[10] = (...args) => _ctx.handleFocusOut && _ctx.handleFocusOut(...args)),
    onKeydown: _cache[11] || (_cache[11] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
    onKeyup: _cache[12] || (_cache[12] = (...args) => _ctx.handleKeyup && _ctx.handleKeyup(...args)),
    onMousedown: _cache[13] || (_cache[13] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
    "aria-owns": !$props.searchable ? _ctx.ariaOwns : void 0,
    "aria-placeholder": !$props.searchable ? _ctx.ariaPlaceholder : void 0,
    "aria-expanded": !$props.searchable ? _ctx.isOpen : void 0,
    "aria-activedescendant": !$props.searchable ? _ctx.ariaActiveDescendant : void 0,
    "aria-multiselectable": !$props.searchable ? _ctx.ariaMultiselectable : void 0,
    role: !$props.searchable ? "listbox" : void 0
  }, !$props.searchable ? $props.aria : {}), [
    createCommentVNode(" Search "),
    $props.mode !== "tags" && $props.searchable && !$props.disabled ? (openBlock(), createElementBlock("input", mergeProps({
      key: 0,
      type: $props.inputType,
      modelValue: _ctx.search,
      value: _ctx.search,
      class: _ctx.classList.search,
      autocomplete: $props.autocomplete,
      id: $props.searchable ? $props.id : void 0,
      onInput: _cache[0] || (_cache[0] = (...args) => _ctx.handleSearchInput && _ctx.handleSearchInput(...args)),
      onKeypress: _cache[1] || (_cache[1] = (...args) => _ctx.handleKeypress && _ctx.handleKeypress(...args)),
      onPaste: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handlePaste && _ctx.handlePaste(...args), ["stop"])),
      ref: "input",
      "aria-owns": _ctx.ariaOwns,
      "aria-placeholder": _ctx.ariaPlaceholder,
      "aria-expanded": _ctx.isOpen,
      "aria-activedescendant": _ctx.ariaActiveDescendant,
      "aria-multiselectable": _ctx.ariaMultiselectable,
      role: "listbox"
    }, {
      ...$props.attrs,
      ...$props.aria
    }), null, 16, _hoisted_2$5)) : createCommentVNode("v-if", true),
    createCommentVNode(" Tags (with search) "),
    $props.mode == "tags" ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.classList.tags),
      "data-tags": ""
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.iv, (option, i, key) => {
        return renderSlot(_ctx.$slots, "tag", {
          option,
          handleTagRemove: _ctx.handleTagRemove,
          disabled: $props.disabled
        }, () => [
          (openBlock(), createElementBlock("span", {
            class: normalizeClass(_ctx.classList.tag),
            tabindex: "-1",
            onKeyup: withKeys(($event) => _ctx.handleTagRemove(option, $event), ["enter"]),
            key,
            "aria-label": _ctx.ariaTagLabel(option[$props.label])
          }, [
            createTextVNode(toDisplayString(option[$props.label]) + " ", 1),
            !$props.disabled ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.classList.tagRemove),
              onClick: ($event) => _ctx.handleTagRemove(option, $event)
            }, [
              createBaseVNode("span", {
                class: normalizeClass(_ctx.classList.tagRemoveIcon)
              }, null, 2)
            ], 10, _hoisted_4$3)) : createCommentVNode("v-if", true)
          ], 42, _hoisted_3$4))
        ]);
      }), 256)),
      createBaseVNode("div", {
        class: normalizeClass(_ctx.classList.tagsSearchWrapper),
        ref: "tags"
      }, [
        createCommentVNode(" Used for measuring search width "),
        createBaseVNode("span", {
          class: normalizeClass(_ctx.classList.tagsSearchCopy)
        }, toDisplayString(_ctx.search), 3),
        createCommentVNode(" Actual search input "),
        $props.searchable && !$props.disabled ? (openBlock(), createElementBlock("input", mergeProps({
          key: 0,
          type: $props.inputType,
          modelValue: _ctx.search,
          value: _ctx.search,
          class: _ctx.classList.tagsSearch,
          id: $props.searchable ? $props.id : void 0,
          autocomplete: $props.autocomplete,
          onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleSearchInput && _ctx.handleSearchInput(...args)),
          onKeypress: _cache[4] || (_cache[4] = (...args) => _ctx.handleKeypress && _ctx.handleKeypress(...args)),
          onPaste: _cache[5] || (_cache[5] = withModifiers((...args) => _ctx.handlePaste && _ctx.handlePaste(...args), ["stop"])),
          ref: "input",
          "aria-owns": _ctx.ariaOwns,
          "aria-placeholder": _ctx.ariaPlaceholder,
          "aria-expanded": _ctx.isOpen,
          "aria-activedescendant": _ctx.ariaActiveDescendant,
          "aria-multiselectable": _ctx.ariaMultiselectable,
          role: "listbox"
        }, {
          ...$props.attrs,
          ...$props.aria
        }), null, 16, _hoisted_5$3)) : createCommentVNode("v-if", true)
      ], 2)
    ], 2)) : createCommentVNode("v-if", true),
    createCommentVNode(" Single label "),
    $props.mode == "single" && _ctx.hasSelected && !_ctx.search && _ctx.iv ? renderSlot(_ctx.$slots, "singlelabel", {
      key: 2,
      value: _ctx.iv
    }, () => [
      createBaseVNode("div", {
        class: normalizeClass(_ctx.classList.singleLabel),
        "aria-hidden": "true"
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.classList.singleLabelText),
          innerHTML: _ctx.iv[$props.label]
        }, null, 10, _hoisted_6$3)
      ], 2)
    ]) : createCommentVNode("v-if", true),
    createCommentVNode(" Multiple label "),
    $props.mode == "multiple" && _ctx.hasSelected && !_ctx.search ? renderSlot(_ctx.$slots, "multiplelabel", {
      key: 3,
      values: _ctx.iv
    }, () => [
      createBaseVNode("div", {
        class: normalizeClass(_ctx.classList.multipleLabel),
        innerHTML: _ctx.multipleLabelText,
        "aria-hidden": "true"
      }, null, 10, _hoisted_7$2)
    ]) : createCommentVNode("v-if", true),
    createCommentVNode(" Placeholder "),
    $props.placeholder && !_ctx.hasSelected && !_ctx.search ? renderSlot(_ctx.$slots, "placeholder", { key: 4 }, () => [
      createBaseVNode("div", {
        class: normalizeClass(_ctx.classList.placeholder),
        "aria-hidden": "true"
      }, toDisplayString($props.placeholder), 3)
    ]) : createCommentVNode("v-if", true),
    createCommentVNode(" Spinner "),
    $props.loading || _ctx.resolving ? renderSlot(_ctx.$slots, "spinner", { key: 5 }, () => [
      createBaseVNode("span", {
        class: normalizeClass(_ctx.classList.spinner),
        "aria-hidden": "true"
      }, null, 2)
    ]) : createCommentVNode("v-if", true),
    createCommentVNode(" Clear "),
    _ctx.hasSelected && !$props.disabled && $props.canClear && !_ctx.busy ? renderSlot(_ctx.$slots, "clear", {
      key: 6,
      clear: _ctx.clear
    }, () => [
      createBaseVNode("span", {
        tabindex: "0",
        role: "button",
        "aria-label": "\u274E",
        class: normalizeClass(_ctx.classList.clear),
        onClick: _cache[6] || (_cache[6] = (...args) => _ctx.clear && _ctx.clear(...args)),
        onKeyup: _cache[7] || (_cache[7] = withKeys((...args) => _ctx.clear && _ctx.clear(...args), ["enter"]))
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.classList.clearIcon)
        }, null, 2)
      ], 34)
    ]) : createCommentVNode("v-if", true),
    createCommentVNode(" Caret "),
    $props.caret && $props.showOptions ? renderSlot(_ctx.$slots, "caret", { key: 7 }, () => [
      createBaseVNode("span", {
        class: normalizeClass(_ctx.classList.caret),
        onClick: _cache[8] || (_cache[8] = (...args) => _ctx.handleCaretClick && _ctx.handleCaretClick(...args)),
        "aria-hidden": "true"
      }, null, 2)
    ]) : createCommentVNode("v-if", true),
    createCommentVNode(" Options "),
    createBaseVNode("div", {
      class: normalizeClass(_ctx.classList.dropdown),
      tabindex: "-1"
    }, [
      renderSlot(_ctx.$slots, "beforelist", { options: _ctx.fo }),
      createBaseVNode("ul", {
        class: normalizeClass(_ctx.classList.options),
        id: _ctx.ariaOwns
      }, [
        $props.groups ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.fg, (group, i, key) => {
          return openBlock(), createElementBlock("li", {
            class: normalizeClass(_ctx.classList.group),
            key,
            id: _ctx.ariaGroupId(group),
            "aria-label": _ctx.ariaGroupLabel(group),
            "aria-selected": _ctx.isSelected(group),
            role: "option"
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.classList.groupLabel(group)),
              "data-pointed": _ctx.isPointed(group),
              onMouseenter: ($event) => _ctx.setPointer(group, i),
              onClick: ($event) => _ctx.handleGroupClick(group)
            }, [
              renderSlot(_ctx.$slots, "grouplabel", {
                group,
                isSelected: _ctx.isSelected,
                isPointed: _ctx.isPointed
              }, () => [
                createBaseVNode("span", {
                  innerHTML: group[$props.groupLabel]
                }, null, 8, _hoisted_11$1)
              ])
            ], 42, _hoisted_10$1),
            createBaseVNode("ul", {
              class: normalizeClass(_ctx.classList.groupOptions),
              "aria-label": _ctx.ariaGroupLabel(group),
              role: "group"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(group.__VISIBLE__, (option, i2, key2) => {
                return openBlock(), createElementBlock("li", {
                  class: normalizeClass(_ctx.classList.option(option, group)),
                  "data-pointed": _ctx.isPointed(option),
                  "data-selected": _ctx.isSelected(option) || void 0,
                  key: key2,
                  onMouseenter: ($event) => _ctx.setPointer(option),
                  onClick: ($event) => _ctx.handleOptionClick(option),
                  id: _ctx.ariaOptionId(option),
                  "aria-selected": _ctx.isSelected(option),
                  "aria-label": _ctx.ariaOptionLabel(option),
                  role: "option"
                }, [
                  renderSlot(_ctx.$slots, "option", {
                    option,
                    isSelected: _ctx.isSelected,
                    isPointed: _ctx.isPointed,
                    search: _ctx.search
                  }, () => [
                    createBaseVNode("span", {
                      innerHTML: option[$props.label]
                    }, null, 8, _hoisted_14)
                  ])
                ], 42, _hoisted_13);
              }), 128))
            ], 10, _hoisted_12)
          ], 10, _hoisted_9$1);
        }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.fo, (option, i, key) => {
          return openBlock(), createElementBlock("li", {
            class: normalizeClass(_ctx.classList.option(option)),
            "data-pointed": _ctx.isPointed(option),
            "data-selected": _ctx.isSelected(option) || void 0,
            key,
            onMouseenter: ($event) => _ctx.setPointer(option),
            onClick: ($event) => _ctx.handleOptionClick(option),
            id: _ctx.ariaOptionId(option),
            "aria-selected": _ctx.isSelected(option),
            "aria-label": _ctx.ariaOptionLabel(option),
            role: "option"
          }, [
            renderSlot(_ctx.$slots, "option", {
              option,
              isSelected: _ctx.isSelected,
              isPointed: _ctx.isPointed,
              search: _ctx.search
            }, () => [
              createBaseVNode("span", {
                innerHTML: option[$props.label]
              }, null, 8, _hoisted_16)
            ])
          ], 42, _hoisted_15);
        }), 128))
      ], 10, _hoisted_8$2),
      _ctx.noOptions ? renderSlot(_ctx.$slots, "nooptions", { key: 0 }, () => [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classList.noOptions),
          innerHTML: $props.noOptionsText
        }, null, 10, _hoisted_17)
      ]) : createCommentVNode("v-if", true),
      _ctx.noResults ? renderSlot(_ctx.$slots, "noresults", { key: 1 }, () => [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classList.noResults),
          innerHTML: $props.noResultsText
        }, null, 10, _hoisted_18)
      ]) : createCommentVNode("v-if", true),
      $props.infinite && _ctx.hasMore ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(_ctx.classList.inifinite),
        ref: "infiniteLoader"
      }, [
        renderSlot(_ctx.$slots, "infinite", {}, () => [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.classList.inifiniteSpinner)
          }, null, 2)
        ])
      ], 2)) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "afterlist", { options: _ctx.fo })
    ], 2),
    createCommentVNode(" Hacky input element to show HTML5 required warning "),
    $props.required ? (openBlock(), createElementBlock("input", {
      key: 8,
      class: normalizeClass(_ctx.classList.fakeInput),
      tabindex: "-1",
      value: _ctx.textValue,
      required: ""
    }, null, 10, _hoisted_19)) : createCommentVNode("v-if", true),
    createCommentVNode(" Native input support "),
    $props.nativeSupport ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [
      $props.mode == "single" ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "hidden",
        name: $props.name,
        value: _ctx.plainValue !== void 0 ? _ctx.plainValue : ""
      }, null, 8, _hoisted_20)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.plainValue, (v, i) => {
        return openBlock(), createElementBlock("input", {
          type: "hidden",
          name: `${$props.name}[]`,
          value: v,
          key: i
        }, null, 8, _hoisted_21);
      }), 128))
    ], 64)) : createCommentVNode("v-if", true),
    createCommentVNode(" Create height for empty input "),
    createBaseVNode("div", {
      class: normalizeClass(_ctx.classList.spacer)
    }, null, 2)
  ], 16, _hoisted_1$5);
}
script.render = render$1;
script.__file = "src/Multiselect.vue";
var gallerySorter_vue_vue_type_style_index_0_lang = "";
var gallerySorter_vue_vue_type_style_index_1_scoped_true_lang = "";
const _sfc_main$3 = {
  name: "sorter",
  props: ["label", "currentList", "listName", "item", "index", "tippyTop"],
  mixins: [slugify],
  components: {
    VueSlider,
    Multiselect: script
  },
  data: function() {
    return {
      range: null,
      dropdownOptions: null
    };
  },
  created: function() {
    if (this.item.range) {
      var range = {
        min: this.item.rangeMin(),
        max: this.item.rangeMax()
      };
      if (range.min < 0)
        range.min = 0;
      if (range.max < 0)
        range.max = 0;
      if (range.min > range.max)
        range.min = range.max;
      let rangeIsSetByUser = _.isArray(this.item.range);
      if (rangeIsSetByUser) {
        range.value = _.clone(this.item.range);
        if (range.value[0] < range.min || range.value[0] > range.max)
          range.value[0] = range.min;
        if (range.value[1] < range.min || range.value[1] > range.max)
          range.value[1] = range.max;
      } else {
        range.value = [range.min, range.max];
      }
      if (this.item.rangeMarks)
        range.marks = this.item.rangeMarks(range);
      this.range = range;
    } else if (this.$store.getters.filterExtrasKeys.match(this.item.key)) {
      if (!this.dropdownOptions && !!this.item.dropdownOpts)
        this.dropdownOptions = this.item.dropdownOpts();
    }
  },
  computed: {
    filterAmounts: function() {
      this.$compEmitter.emit("repositionSearchOpts");
      let isRegularFilter = !(this.item.range || this.item.dropdownOpts);
      let specialFilterIsActive = !isRegularFilter && this.item.active === true;
      if (isRegularFilter || specialFilterIsActive) {
        const vue = this;
        const filterExtraRules = _.filter(this.$store.state.listRenderingOpts.filter, { type: "filterExtras", active: true });
        let conditionCheck = function(book) {
          let filterExtrasConditions = _.map(filterExtraRules, function(filter) {
            return !!filter.condition(book, filter);
          });
          return !_.includes(filterExtrasConditions, false);
        };
        let collection = this.item.type === "filter" ? this.$store.getters.searchIsActive ? this.$store.state.searchCollection : this.$store.getters.collectionSource : this.$store.getters.collection;
        return _.filter(collection, function(book) {
          return vue.item.condition(book) && conditionCheck(book);
        }).length;
      } else {
        return 0;
      }
    },
    rangeVal: function() {
      return this.range.value;
    },
    inputVmodel: {
      get: function() {
        return this.item.active;
      },
      set: function(value) {
        let changes = {
          listName: this.listName,
          key: this.item.key,
          active: value
        };
        if (this.item.range) {
          changes.range = value ? _.clone(this.range.value) : true;
        }
        if (this.item.group)
          changes.group = true;
        this.$store.commit("updateListRenderingOpts", changes);
        this.doTheThings(value);
      }
    },
    isActiveSortItem: function() {
      if (this.listName === "sort") {
        if (!this.$store.getters.searchIsActive || this.$store.getters.searchIsActive && this.$route.query.sort) {
          const changedIndex = _.findIndex(this.currentList, "current");
          return changedIndex === this.index;
        }
      } else if (this.listName === "filter") {
        return false;
      }
    }
  },
  methods: {
    tooltipFormatter: function(val) {
      return val + this.item.rangeSuffix;
    },
    dropdownChanged: function(value) {
      let changes = {
        listName: this.listName,
        key: this.item.key,
        active: value.length > 0,
        value
      };
      if (this.item.group)
        changes.group = true;
      this.$store.commit("updateListRenderingOpts", changes);
      this.doTheThings(value, true);
    },
    dropdownOpened: function(e) {
      const createDropdownDataOnFirstOpen = !this.dropdownOptions && !!this.item.dropdownOpts;
      if (createDropdownDataOnFirstOpen)
        this.dropdownOptions = this.item.dropdownOpts();
    },
    rangeChanged: function(value) {
      this.range.value = value;
      let changes = {
        listName: this.listName,
        key: this.item.key,
        range: value,
        active: true
      };
      if (this.item.group)
        changes.group = true;
      this.$store.commit("updateListRenderingOpts", changes);
      this.doTheThings(value, true);
    },
    adjustRange: function(direction) {
      let changes = {
        listName: this.listName,
        key: this.item.key,
        active: true,
        range: [0, 0]
      };
      if (direction === "left") {
        const min = this.range.min;
        changes.range[0] = min;
        this.range.value = [min, this.range.value[1]];
      } else {
        const max = this.range.max;
        changes.range[1] = max;
        this.range.value = [this.range.value[0], max];
      }
      if (this.item.group)
        changes.group = true;
      this.$store.commit("updateListRenderingOpts", changes);
      this.doTheThings(changes.range, true);
    },
    doTheThings: function(value, specialBoy) {
      if (this.item.key === "sortValues")
        this.$compEmitter.emit("book-clicked", null);
      if (this.listName === "scope") {
        this.$compEmitter.emit("start-scope");
      } else if ((this.listName === "sort" || this.item.key === "randomize" && !this.$store.getters.searchIsActive) && this.item.key !== "sortValues") {
        this.$store.commit("prop", { "key": "searchSort", value: false });
        this.$compEmitter.emit("start-sort");
      } else if (this.listName === "filter") {
        this.$compEmitter.emit("start-filter");
      }
      this.saveOptions(value, specialBoy);
    },
    saveOptions: function(value, specialBoy) {
      const sortKey = this.item.key;
      const sortType = this.item.type;
      const queryObj = {};
      if (sortKey === "sortValues") {
        queryObj[sortKey] = value;
      } else if (sortType === "sort") {
        queryObj[sortType] = sortKey;
        queryObj.sortDir = value ? "desc" : "asc";
      } else if (this.listName === "filter") {
        if (sortType === "filter") {
          queryObj[sortType] = encodeURIComponent(this.$store.getters.filterKeys);
        }
        if (sortType === "filterExtras") {
          if (this.$route.name === "series") {
            if (sortKey.match(/inLibrary|notInLibrary/)) {
              this.$store.commit("prop", { key: "sticky.seriesFilters." + sortKey, value });
            }
          }
          let vue = this;
          const filterExtrasKeys = vue.$store.getters.filterExtrasKeys;
          const queryKeysArray = !filterExtrasKeys ? false : _.map(filterExtrasKeys.split(","), function(key) {
            const keyItem = _.find(vue.$store.state.listRenderingOpts.filter, { key });
            let range = _.get(vue.range, "value");
            if (!range)
              range = _.get(keyItem, "range");
            if (range && _.isArray(range)) {
              return encodeURIComponent(key + ":" + range[0] + "-" + (range[1] || range[0]));
            } else if (_.get(keyItem, "value.0")) {
              return encodeURIComponent(key + ":") + encodeURIComponent(_.map(keyItem.value, function(val) {
                return val;
              }).join("|"));
            } else if (key) {
              return encodeURIComponent(key);
            }
          });
          queryObj[sortType] = queryKeysArray ? queryKeysArray.join(",") : null;
        }
      } else if (this.listName === "scope") {
        queryObj[this.listName] = encodeURIComponent(this.$store.getters.scopeKeys);
      }
      this.$updateQueries(queryObj);
    }
  }
};
const _hoisted_1$4 = { class: "sorter-button-wrapper" };
const _hoisted_2$4 = ["content"];
const _hoisted_3$3 = ["value"];
const _hoisted_4$2 = {
  key: 2,
  class: "radiobutton"
};
const _hoisted_5$2 = {
  key: 3,
  class: "checkbox"
};
const _hoisted_6$2 = {
  key: 0,
  class: "dropdown-label-suffix"
};
const _hoisted_7$1 = {
  key: 0,
  class: "label-exclude"
};
const _hoisted_8$1 = {
  key: 1,
  class: "label-include"
};
const _hoisted_9 = {
  key: 5,
  class: "books-in-filter"
};
const _hoisted_10 = {
  key: 0,
  class: "range-slider"
};
const _hoisted_11 = { key: 1 };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa6_solid_sort_down = __unplugin_components_0$2;
  const _component_fa6_solid_sort_up = __unplugin_components_1$1;
  const _component_fa_regular_circle = __unplugin_components_2$1;
  const _component_fa_regular_dot_circle = __unplugin_components_3$1;
  const _component_ic_round_square = __unplugin_components_4;
  const _component_fa_solid_check = __unplugin_components_5;
  const _component_vue_slider = resolveComponent("vue-slider");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("span", _hoisted_1$4, [
    $props.item ? withDirectives((openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass($props.item.key),
      content: $props.item.tippy ? $props.item.tippy : false
    }, [
      createBaseVNode("label", {
        class: normalizeClass(["sorter-button", { ranged: $props.item.range, "faux-disabled": $props.item.type === "filterExtras" ? $options.filterAmounts < 1 : false, "is-dropdown": $props.item.dropdownOpts }])
      }, [
        $props.label === false ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["input-label", { active: $options.isActiveSortItem }])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)) : createCommentVNode("", true),
        withDirectives(createBaseVNode("input", {
          type: "checkbox",
          value: $props.index,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.inputVmodel = $event)
        }, null, 8, _hoisted_3$3), [
          [vModelCheckbox, $options.inputVmodel]
        ]),
        $props.item.type === "sort" ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["sortbox", { active: $options.isActiveSortItem }])
        }, [
          createVNode(_component_fa6_solid_sort_down, { "data-icon": "sort-down" }),
          createVNode(_component_fa6_solid_sort_up, { "data-icon": "sort-up" })
        ], 2)) : $props.item.radiobutton ? (openBlock(), createElementBlock("span", _hoisted_4$2, [
          createVNode(_component_fa_regular_circle, { "data-icon": "circle" }),
          createVNode(_component_fa_regular_dot_circle, { "data-icon": "circle" })
        ])) : (openBlock(), createElementBlock("span", _hoisted_5$2, [
          createVNode(_component_ic_round_square, { "data-icon": "square" }),
          createVNode(_component_fa_solid_check, { "data-icon": "check" })
        ])),
        $props.label !== false ? (openBlock(), createElementBlock("span", {
          key: 4,
          class: normalizeClass(["input-label", { active: $options.isActiveSortItem }])
        }, [
          createBaseVNode("span", null, [
            createTextVNode(toDisplayString($props.item.label || $props.item.key.replace(".name", "")) + " ", 1),
            $props.item.dropdownOpts ? (openBlock(), createElementBlock("span", _hoisted_6$2, [
              $props.item.exclude ? (openBlock(), createElementBlock("span", _hoisted_7$1, "Exclude")) : (openBlock(), createElementBlock("span", _hoisted_8$1, "Include"))
            ])) : createCommentVNode("", true)
          ])
        ], 2)) : createCommentVNode("", true),
        $props.listName === "filter" ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString($options.filterAmounts), 1)) : createCommentVNode("", true)
      ], 2),
      $props.item.range ? (openBlock(), createElementBlock("div", _hoisted_10, [
        createBaseVNode("span", {
          style: { "font-size": "13px", "line-height": "13px", "cursor": "w-resize" },
          onClick: _cache[1] || (_cache[1] = ($event) => $options.adjustRange("left"))
        }, toDisplayString(_ctx.range.value[0]) + toDisplayString($props.item.rangeSuffix), 1),
        createVNode(_component_vue_slider, {
          disabled: _ctx.range.disabled,
          dragOnClick: true,
          adsorb: true,
          lazy: true,
          hideLabel: true,
          included: !!_ctx.range.marks,
          interval: _ctx.range.min === _ctx.range.max ? 1 : $props.item.rangeInterval || 1,
          marks: _ctx.range.marks,
          modelValue: _ctx.range.value,
          min: _ctx.range.min,
          max: _ctx.range.max,
          "min-range": _ctx.range.min === _ctx.range.max ? 0 : $props.item.rangeMinDist || 0,
          "enable-cross": false,
          onChange: $options.rangeChanged,
          "tooltip-formatter": $props.item.tooltipFormatter || $options.tooltipFormatter,
          "tooltip-placement": "top",
          tooltip: "active",
          "use-keyboard": false,
          onDragStart: _cache[2] || (_cache[2] = ($event) => _ctx.$store.commit("prop", { key: "searchOptCloseGuard", value: true })),
          onDragEnd: _cache[3] || (_cache[3] = ($event) => _ctx.$store.commit("prop", { key: "searchOptCloseGuard", value: false }))
        }, null, 8, ["disabled", "included", "interval", "marks", "modelValue", "min", "max", "min-range", "onChange", "tooltip-formatter"]),
        createBaseVNode("span", {
          style: { "font-size": "13px", "line-height": "13px", "cursor": "e-resize" },
          onClick: _cache[4] || (_cache[4] = ($event) => $options.adjustRange("right"))
        }, toDisplayString(_ctx.range.value[1]) + toDisplayString($props.item.rangeSuffix), 1)
      ])) : createCommentVNode("", true),
      !!$props.item.dropdownOpts ? (openBlock(), createElementBlock("div", _hoisted_11, [
        createVNode(_component_Multiselect, {
          ref: "multiselect",
          value: $props.item.value,
          placeholder: $props.item.placeholder || "Include...",
          onChange: $options.dropdownChanged,
          onOpen: $options.dropdownOpened,
          options: _ctx.dropdownOptions,
          mode: "tags",
          hideSelected: true,
          clearOnSelect: false,
          closeOnSelect: false,
          multiple: true,
          taggable: true,
          searchable: true,
          "track-by": $props.item.dropdownTrackBy,
          label: $props.item.dropdownLabel,
          valueProp: $props.item.dropdownValueProp
        }, null, 8, ["value", "placeholder", "onChange", "onOpen", "options", "track-by", "label", "valueProp"])
      ])) : createCommentVNode("", true)
    ], 10, _hoisted_2$4)), [
      [_directive_tippy, {
        delay: 150,
        maxWidth: 350,
        placement: $props.tippyTop ? "top" : "left",
        flipBehavior: $props.tippyTop ? ["top", "bottom", "left", "right"] : ["left", "top", "bottom", "right"],
        distance: $props.listName ? 20 : 10
      }]
    ]) : createCommentVNode("", true)
  ]);
}
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-cac031d4"]]);
const _hoisted_1$3 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273c-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556c4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504C119.034 504 8.001 392.967 8 256.002C7.999 119.193 119.646 7.755 256.455 8z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$2);
}
var __unplugin_components_0$1 = { name: "fa-solid-redo-alt", render };
var gallerySearchOptions_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "searchOptions",
  props: ["listName"],
  data: function() {
    return {
      css: {
        arrow: { left: "0px" },
        options: { right: "0px" }
      }
    };
  },
  computed: {
    mainfilters() {
      const inWishlist = this.$route.name === "wishlist";
      const inSeriesSubPage = this.$route.name === "series";
      return _.filter(this.optionsList, (item) => {
        return item.type === "filter" && (inWishlist ? !item.excludeFromWishlist : true) && (inSeriesSubPage ? !item.excludeFromSeriesSubPage : true);
      });
    },
    filteredOptionsList() {
      const inWishlist = this.$route.name === "wishlist";
      const inSeriesSubPage = this.$route.name === "series";
      const viewModeGrid = this.$store.state.sticky.viewMode !== "grid";
      return _.filter(this.optionsList, (item) => {
        const sortValues = item.key === "sortValues";
        const notFilter = item.type !== "filter";
        return !(viewModeGrid && sortValues) && notFilter && (inWishlist ? !item.excludeFromWishlist : true) && (inSeriesSubPage ? !item.excludeFromSeriesSubPage : true);
      });
    }
  },
  created: function() {
    this.$store.commit("prop", { key: "lazyScroll", value: false });
    this.$updateQueries({ y: null });
    this.optionsList = this.$store.state.listRenderingOpts[this.listName];
  },
  mounted: function() {
    this.repositionSearchOptions();
    this.$compEmitter.on("repositionSearchOpts", this.repositionSearchOptions);
    this.$compEmitter.on("afterWindowResize", this.repositionSearchOptions);
  },
  beforeUnmount: function() {
    this.$compEmitter.off("repositionSearchOpts", this.repositionSearchOptions);
    this.$compEmitter.off("afterWindowResize", this.repositionSearchOptions);
    scroll({ top: 0, behavior: "smooth" });
    this.$store.commit("prop", { key: "searchOptOpenHeight", value: null });
    this.$store.commit("prop", { key: "lazyScroll", value: true });
  },
  methods: {
    resetFilters: function() {
      this.$updateQueries({ filter: null, filterExtras: null });
      this.$store.commit("resetFilters");
      this.$compEmitter.emit("start-filter");
    },
    repositionSearchOptions: _.debounce(function() {
      this.$nextTick(function() {
        const searchOpts = {};
        searchOpts.el = this.$refs.options;
        searchOpts.width = searchOpts.el.offsetWidth;
        searchOpts.left = searchOpts.el.offsetLeft;
        const iconsWrapper = {};
        iconsWrapper.el = document.querySelector("#ale-search > .icons");
        iconsWrapper.width = iconsWrapper.el.offsetWidth;
        const option = {};
        option.el = document.querySelector(".search-opt-btn.active").parentNode;
        option.width = option.el.offsetWidth;
        option.left = option.el.offsetLeft;
        option.middle = iconsWrapper.width - (option.left + option.width / 2);
        searchOpts.position = option.middle - searchOpts.width / 2;
        const difference = option.el.getBoundingClientRect().left + option.width / 2 + searchOpts.width / 2 - window.innerWidth;
        const fitToWindow = difference > 0 ? difference + 20 : 0;
        this.css.options.right = searchOpts.position + fitToWindow + "px";
        this.css.arrow.left = searchOpts.width / 2 - 10 + fitToWindow + "px";
      });
    }, 150, { leading: true, trailing: false }),
    sortersMounted: _.debounce(function() {
      if (this.$refs.options) {
        let maxHeight = this.$refs.options.offsetHeight + this.$refs.options.offsetTop;
        if (window.innerHeight > maxHeight)
          maxHeight = window.innerHeight;
        else
          maxHeight = maxHeight + 100;
        this.$store.commit("prop", { key: "searchOptOpenHeight", value: maxHeight });
      }
    }, 250, { leading: false, trailing: true })
  }
};
const _hoisted_1$2 = { class: "search-options-inner-wrap" };
const _hoisted_2$2 = { class: "total" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa_solid_redo_alt = __unplugin_components_0$1;
  const _component_gallery_sorter = __unplugin_components_1;
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", {
    id: "search-options",
    ref: "options",
    class: normalizeClass($props.listName + "-options"),
    style: normalizeStyle(_ctx.css.options)
  }, [
    createBaseVNode("div", _hoisted_1$2, [
      createBaseVNode("div", {
        class: "search-opts-arrow",
        style: normalizeStyle(_ctx.css.arrow)
      }, null, 4),
      $props.listName === "filter" && _ctx.$store.getters.regularFilters ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: "regular-filters",
        style: normalizeStyle({ top: _ctx.$store.state.topNavOffset + "px" })
      }, [
        withDirectives((openBlock(), createElementBlock("li", {
          class: "reset-filters",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.resetFilters && $options.resetFilters(...args)),
          content: "Reset filters"
        }, [
          createVNode(_component_fa_solid_redo_alt)
        ])), [
          [_directive_tippy, { placement: "top", flipBehavior: ["top", "right", "bottom", "left"] }]
        ]),
        createBaseVNode("li", _hoisted_2$2, [
          createBaseVNode("span", {
            class: normalizeClass({ difference: _ctx.$store.getters.collection.length !== _ctx.$store.getters.collectionTotal })
          }, toDisplayString(_ctx.$store.getters.collection.length), 3),
          createTextVNode(" / " + toDisplayString(_ctx.$store.getters.collectionTotal), 1)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.mainfilters, (item, index) => {
          return openBlock(), createElementBlock("li", {
            class: "search-option",
            key: item.key
          }, [
            createVNode(_component_gallery_sorter, {
              label: item.label,
              item,
              index,
              currentList: _ctx.optionsList,
              listName: $props.listName,
              onVnodeMounted: $options.sortersMounted
            }, null, 8, ["label", "item", "index", "currentList", "listName", "onVnodeMounted"])
          ]);
        }), 128))
      ], 4)) : createCommentVNode("", true),
      createBaseVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredOptionsList, (item, index) => {
          return openBlock(), createElementBlock("li", {
            class: normalizeClass(["search-option", { extras: item.type && item.type.match(/extra/i), divider: item.type === "divider" }]),
            key: item.key
          }, [
            item.type !== "divider" ? (openBlock(), createBlock(_component_gallery_sorter, {
              key: 0,
              label: item.label,
              item,
              index,
              currentList: _ctx.optionsList,
              listName: $props.listName,
              onVnodeMounted: $options.sortersMounted
            }, null, 8, ["label", "item", "index", "currentList", "listName", "onVnodeMounted"])) : createCommentVNode("", true)
          ], 2);
        }), 128))
      ])
    ])
  ], 6);
}
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var gallerySearchIcons_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "searchIcons",
  props: ["listName"],
  data: function() {
    return {
      items: [
        {
          name: "scope",
          on: true,
          active: false,
          icon: "fa-solid fa-microscope",
          tooltip: "Change the search scope for more accurate results"
        },
        {
          name: "filter",
          on: true,
          active: false,
          icon: "fa-solid fa-filter",
          tooltip: "Filter books"
        },
        {
          name: "sort",
          on: true,
          active: false,
          icon: "fa-solid fa-sort",
          tooltip: "Sort books"
        }
      ]
    };
  },
  computed: {
    filtersActive: function() {
      return this.$store.getters.filterExtrasKeys || this.$store.getters.filterKeys !== "notStarted,started,finished" && this.$store.getters.filterKeysLength;
    },
    filteredItems() {
      return _.filter(this.items, (item) => {
        return this.showIcon(item);
      });
    }
  },
  methods: {
    openSearchOptions: function(clickedOption, e) {
      const listBeforeClick = this.listName;
      this.$emit("update:listName", false);
      if (listBeforeClick !== clickedOption.name) {
        this.$nextTick(function() {
          this.$emit("update:listName", clickedOption.name);
        });
      }
    },
    showIcon: function(item) {
      if (!item)
        return;
      switch (item.name) {
        case "scope":
          return this.$store.state.listRenderingOpts[item.name].length > 0;
        case "filter":
          let noRegularFilters = !this.$store.getters.regularFilters;
          return _.filter(this.$store.state.listRenderingOpts[item.name], function(filter) {
            let isDivider = filter.type === "divider";
            let isFilter = noRegularFilters ? true : filter.type === item.name;
            return !isDivider && isFilter;
          }).length > 0;
        case "sort":
          return _.filter(this.$store.state.listRenderingOpts[item.name], function(filter) {
            let isDivider = filter.type === "divider";
            let isFilter = filter.type === item.name;
            return !isDivider && isFilter;
          }).length > 0;
      }
    }
  }
};
const _hoisted_1$1 = { class: "icons" };
const _hoisted_2$1 = ["content"];
const _hoisted_3$1 = { class: "book-in-selection" };
const _hoisted_4$1 = { class: "inner-wrap" };
const _hoisted_5$1 = ["content", "onClick"];
const _hoisted_6$1 = ["data-option"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    withDirectives((openBlock(), createElementBlock("div", {
      class: "icon-wrap",
      content: "Items in current selection: <strong>" + _ctx.$store.getters.collection.length + "</strong> / <strong>" + _ctx.$store.getters.collectionTotal + "</strong>"
    }, [
      createBaseVNode("div", _hoisted_3$1, [
        createBaseVNode("div", _hoisted_4$1, toDisplayString(_ctx.$store.getters.collection.length), 1)
      ])
    ], 8, _hoisted_2$1)), [
      [_directive_tippy]
    ]),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredItems, (item) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        key: item.name,
        class: normalizeClass(["icon-wrap", { disabled: !item.on }]),
        content: item.tooltip,
        onClick: ($event) => $options.openSearchOptions(item, $event)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["search-opt-btn", { active: $props.listName === item.name, "active-filters": item.name === "filter" && $options.filtersActive }]),
          "data-option": item.name
        }, [
          createBaseVNode("i", {
            class: normalizeClass(item.icon)
          }, null, 2)
        ], 10, _hoisted_6$1)
      ], 10, _hoisted_5$1)), [
        [_directive_tippy]
      ]);
    }), 128))
  ]);
}
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-67668a0c"]]);
var sortName = {
  methods: {
    sortName: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          if (o.name)
            return o.name;
        },
        params.direction
      );
    }
  }
};
var sortIsbns = {
  methods: {
    sortIsbns: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          if (o.isbns) {
            if (params.sortKey === "isbn10") {
              const isbn10 = _.find(o.isbns, ["type", "ISBN_10"]);
              if (isbn10)
                return "" + isbn10.identifier;
              else
                return null;
            } else if (params.sortKey === "isbn13") {
              const isbn13 = _.find(o.isbns, ["type", "ISBN_13"]);
              if (isbn13)
                return "" + isbn13.identifier;
              else
                return null;
            }
          } else {
            return null;
          }
        },
        params.direction
      );
    }
  }
};
var sortTitle = {
  methods: {
    sortTitle: function(params) {
      return _.orderBy(
        params.books,
        [
          function(o) {
            const sortValue = o[params.sortKey];
            if (sortValue) {
              if (params.sortKey === "title") {
                return o.title || o.titleShort;
              } else {
                if (_.isArray(sortValue) && _.find(sortValue, "name")) {
                  return _.map(sortValue, "name").join(", ");
                } else {
                  return sortValue;
                }
              }
            } else {
              return null;
            }
          }
        ],
        params.direction
      );
    }
  }
};
var sortAmount = {
  methods: {
    sortAmount: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          if (params.sortKey === "amountTotal") {
            if (o.allBooksMinusDupes)
              return o.allBooksMinusDupes.length;
            else if (o.allBooks)
              return o.allBooks.length;
          } else {
            if (o.books)
              return o.books.length;
          }
        },
        params.direction
      );
    }
  }
};
var sortLength = {
  mixins: [timeStringToSeconds],
  methods: {
    sortLength: function(params) {
      const vue = this;
      return _.orderBy(
        params.books,
        function(o) {
          if (o.length)
            return vue.timeStringToSeconds(o.length);
          else
            return 0;
        },
        params.direction
      );
    }
  }
};
var sortRatings = {
  methods: {
    sortRatings: function(params) {
      const key = params.sortKey;
      const sortArray = [];
      const directionArray = [params.direction];
      sortArray.push(function(o) {
        const value = _.get(o, key, 0);
        return Number(value);
      });
      switch (key) {
        case "myRating":
        case "rating":
          sortArray.push(function(o) {
            const numberOfRatings = _.get(o, "ratings", 0);
            return Number(numberOfRatings);
          });
          directionArray.push(params.direction);
          break;
        case "ratings":
          sortArray.push(function(o) {
            const rating = _.get(o, "rating", 0);
            return Number(rating);
          });
          directionArray.push(params.direction);
          break;
      }
      return _.orderBy(
        params.books,
        sortArray,
        directionArray
      );
    }
  }
};
var sortByLength = {
  methods: {
    sortByLength: function(params) {
      return _.orderBy(
        params.books,
        function(book) {
          if (params.sortKey === "narratorsNumber") {
            if (book.narrators) {
              let hasFullCast = _.find(book.narrators, function(narrator) {
                return narrator.name.match("full cast");
              });
              if (hasFullCast && book.narrators.length === 1) {
                return 99999999;
              } else {
                return book.narrators.length - (hasFullCast ? 1 : 0);
              }
            } else {
              return 0;
            }
          } else {
            return book[params.sortKey].length || 0;
          }
        },
        params.direction
      );
    }
  }
};
var sortProgress = {
  mixins: [timeStringToSeconds],
  methods: {
    sortProgress: function(params) {
      var vue = this;
      return _.orderBy(
        params.books,
        [
          function(o) {
            if (o.progress) {
              if (o.progress.toLowerCase().trim() === "finished") {
                return 100;
              } else if (o.length) {
                var progress = vue.timeStringToSeconds(o.progress);
                const length = vue.timeStringToSeconds(o.length);
                progress = length - progress;
                return progress / length * 100;
              } else {
                return 0;
              }
            } else {
              return 0;
            }
          },
          function(o) {
            if (o.length)
              return !vue.timeStringToSeconds(o.length);
            else
              return 0;
          }
        ],
        params.direction
      );
    }
  }
};
var sortDateAdded = {
  methods: {
    sortDateAdded: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          return o.added;
        },
        params.direction
      );
    }
  }
};
var sortFavorites = {
  methods: {
    sortFavorites: function(params) {
      return _.orderBy(params.books, function(o) {
        return o.favorite;
      }, params.direction);
    }
  }
};
var sortWhispersync = {
  methods: {
    sortWhispersync: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          const sortValue = o[params.sortKey];
          if (sortValue) {
            if (sortValue === "owned")
              return 2;
            else if (sortValue === "available")
              return 1;
          } else {
            return 0;
          }
        },
        params.direction
      );
    }
  }
};
var sortBookNumbers = {
  methods: {
    sortBookNumbers: function(params) {
      return _.orderBy(
        params.books,
        function(book) {
          return book.added;
        },
        params.direction
      );
    },
    sortBookNumbersOriginal: function(params) {
      const seriesAsin = this.$route.params.series;
      return _.orderBy(
        params.books,
        function(o) {
          let numberize = function(allNumbers) {
            if (_.isEmpty(allNumbers) || !allNumbers)
              allNumbers = void 0;
            const numbers = _.isArray(allNumbers) ? allNumbers[0] : allNumbers;
            const dashSplit = typeof numbers == "string" ? numbers.split("-") : [numbers];
            return dashSplit[0] ? parseFloat(dashSplit[0]) : dashSplit[0];
          };
          if (seriesAsin && o.series) {
            let activeSeries = _.find(o.series, { asin: seriesAsin });
            return numberize(activeSeries.bookNumbers);
          } else {
            let anyNumbers = _.find(o.series, "bookNumbers");
            if (anyNumbers) {
              let allNumbers = _.filter(o.series, "bookNumbers");
              allNumbers = _.map(allNumbers, "bookNumbers");
              allNumbers = _.flatten(allNumbers);
              return numberize(allNumbers);
            } else {
              let inSeries = _.find(o.series);
              if (inSeries)
                return -1;
              else
                return -2;
            }
          }
        },
        params.direction
      );
    }
  }
};
var sortReleaseDate = {
  methods: {
    sortReleaseDate: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          if (o.releaseDate) {
            return new Date(o.releaseDate.split("-").join("/"));
          } else {
            return 0;
          }
        },
        params.direction
      );
    }
  }
};
var sortStringNameProp = {
  methods: {
    sortStringNameProp: function(params) {
      const keyMinusName = params.sortKey.replace(".name", "");
      return _.orderBy(
        params.books,
        function(o) {
          return o[keyMinusName] ? o[keyMinusName][0].name.toLowerCase() : null;
        },
        params.direction
      );
    }
  }
};
var sortMissing = {
  methods: {
    sortMissing: function(params) {
      return _.orderBy(
        params.books,
        [(series) => series.allBooksMinusDupes ? series.allBooksMinusDupes.length - series.books.length : series.allBooks ? series.allBooks.length - series.books.length : 0, (series) => series.myRating],
        [params.direction, "desc"]
      );
    }
  }
};
var filterAndSort = {
  mixins: [
    sortName,
    sortIsbns,
    sortTitle,
    sortAmount,
    sortLength,
    sortRatings,
    sortProgress,
    sortByLength,
    sortDateAdded,
    sortFavorites,
    sortWhispersync,
    sortBookNumbers,
    sortReleaseDate,
    sortStringNameProp,
    sortMissing
  ],
  methods: {
    filterBooks: function(books) {
      const filterRules = _.filter(this.$store.state.listRenderingOpts.filter, { type: "filter", active: true });
      const regularFilters = _.find(this.$store.state.listRenderingOpts.filter, { type: "filter" });
      const filterExtraRules = _.filter(this.$store.state.listRenderingOpts.filter, { type: "filterExtras", active: true });
      if (filterRules || filterExtraRules) {
        let conditionCheck = function(book) {
          let filterConditions = _.map(filterRules, function(filter) {
            return !!filter.condition(book);
          });
          let filterExtrasConditions = _.map(filterExtraRules, function(filter) {
            return !!filter.condition(book);
          });
          return (regularFilters ? _.includes(filterConditions, true) : true) && !_.includes(filterExtrasConditions, false);
        };
        return _.filter(books, function(book) {
          return conditionCheck(book);
        });
      } else {
        return books;
      }
    },
    sortBooks: function(books) {
      const sortByItem = _.find(this.$store.state.listRenderingOpts.sort, function(o) {
        if (o.key === "randomize" && o.active)
          return true;
        else if (o.current)
          return true;
      });
      if (sortByItem) {
        const sortOptions = {
          books,
          direction: sortByItem.active ? "desc" : "asc",
          sortKey: sortByItem.key
        };
        switch (sortOptions.sortKey) {
          case "randomize":
            books = _.shuffle(books);
            break;
          case "bookNumbers":
            sortOptions.missingNumber = 0;
            books = this.sortBookNumbersOriginal(sortOptions);
            break;
          case "seriesOrder":
            sortOptions.missingNumber = 0;
            books = this.sortBookNumbers(sortOptions);
            break;
          case "added":
            books = this.sortDateAdded(sortOptions);
            break;
          case "releaseDate":
            books = this.sortReleaseDate(sortOptions);
            break;
          case "authors.name":
          case "narrators.name":
          case "publishers.name":
          case "categories":
          case "tags.name":
            books = this.sortStringNameProp(sortOptions);
            break;
          case "narratorsNumber":
            books = this.sortByLength(sortOptions);
            break;
          case "title":
          case "series":
          case "format":
          case "isNew":
          case "language":
          case "fromPlusCatalog":
          case "unavailable":
          case "favorite":
          case "downloaded":
          case "storePageMissing":
          case "storePageChanged":
          case "archived":
            books = this.sortTitle(sortOptions);
            break;
          case "whispersync":
            books = this.sortWhispersync(sortOptions);
            break;
          case "length":
            books = this.sortLength(sortOptions);
            break;
          case "myRating":
          case "rating":
          case "ratings":
            books = this.sortRatings(sortOptions);
            break;
          case "progress":
            books = this.sortProgress(sortOptions);
            break;
          case "favorite":
            books = this.sortFavorites(sortOptions);
            break;
          case "name":
            books = this.sortName(sortOptions);
            break;
          case "amount":
          case "amountTotal":
            books = this.sortAmount(sortOptions);
            break;
          case "isbn10":
          case "isbn13":
            books = this.sortIsbns(sortOptions);
            break;
          case "missing":
            books = this.sortMissing(sortOptions);
            break;
        }
      }
      return books;
    }
  }
};
var gallerySearch_vue_vue_type_style_index_0_lang = "";
let getFuse = () => __vitePreload(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "fuse-search" */
  "./fuse.esm.0271f478.js"
), true ? [] : void 0);
const _sfc_main = {
  name: "GallerySearch",
  mixins: [filterAndSort],
  props: ["collectionSource"],
  data: function() {
    return {
      enableZoomTimer: null,
      fuse: null,
      fuseOptions: {
        keys: [],
        location: 0,
        threshold: 0.3,
        ignoreLocation: true,
        shouldSort: true,
        includeScore: true,
        includeMatches: true,
        useExtendedSearch: true,
        minMatchCharLength: 2
      },
      listName: false,
      waypointOpts: {
        rootMargin: "-37px"
      },
      fixedSearch: false,
      highlightSearch: false,
      readyToCloseOpts: false,
      autocompleteResults: [],
      useAutocomplete: false
    };
  },
  mounted: function() {
    if (this.$route.query.search) {
      const searchQuery = decodeURIComponent(this.$route.query.search);
      this.$store.commit("prop", { key: "searchQuery", value: searchQuery });
    }
    this.$store.commit("prop", { key: "collectionSource", value: this.collectionSource });
    const ifUrlParams = this.$route.query.sort || this.$route.query.filter || this.$route.query.filterExtras;
    let collection = _.get(this.$store.state, this.collectionSource);
    if (ifUrlParams) {
      if (this.$route.query.filter || this.$route.query.filterExtras)
        collection = this.filterBooks(collection);
      if (this.$route.query.sort)
        collection = this.sortBooks(collection);
      this.$store.commit("prop", { key: "mutatingCollection", value: collection });
    } else {
      this.$store.commit("prop", { key: "mutatingCollection", value: this.sortBooks(this.filterBooks(collection)) });
    }
    if (this.$route.query.search) {
      if (this.$route.query.sort)
        this.fuseOptions.shouldSort = false;
      this.search(this.$event, "on-load");
    }
    this.$refs.aleSearch.addEventListener("touchstart", this.iosAutozoomDisable, { passive: true });
    this.$compEmitter.on("ios-auto-zoom-disable", this.iosAutozoomDisable);
    this.$compEmitter.on("start-scope", this.scope);
    this.$compEmitter.on("start-sort", this.sort);
    this.$compEmitter.on("start-filter", this.filter);
    this.$compEmitter.on("search-focus", this.focusOnSearch);
    this.$store.commit("prop", { key: "searchMounted", value: true });
  },
  beforeUnmount: function() {
    this.$store.commit("prop", { key: "searchQuery", value: "" });
    this.$refs.aleSearch.removeEventListener("touchstart", this.iosAutozoomDisable);
    this.$compEmitter.off("ios-auto-zoom-disable", this.iosAutozoomDisable);
    this.$compEmitter.off("start-scope", this.scope);
    this.$compEmitter.off("start-sort", this.sort);
    this.$compEmitter.off("start-filter", this.filter);
    this.$compEmitter.off("search-focus", this.focusOnSearch);
    this.$store.commit("prop", { key: "searchMounted", value: false });
  },
  methods: {
    dontCloseOpts: _.throttle(function() {
      if (this.readyToCloseOpts)
        this.readyToCloseOpts = false;
    }, 50, { leading: false, trailing: true }),
    closeOpts: function() {
      if (this.readyToCloseOpts) {
        this.readyToCloseOpts = false;
        this.$nextTick(function() {
          let vue = this;
          setTimeout(function() {
            vue.listName = false;
          }, 30);
        });
      }
    },
    scope: function() {
      this.$compEmitter.emit("book-clicked", null);
      if (this.$store.getters.searchIsActive) {
        this.$store.commit("prop", { key: "mutatingCollection", value: this.sortBooks(this.filterBooks(_.get(this.$store.state, this.collectionSource))) });
        if (!this.$store.getters.searchIsActive)
          this.fuseOptions.shouldSort = false;
        this.search();
      }
    },
    filter: function() {
      this.$compEmitter.emit("book-clicked", null);
      this.$store.commit("prop", { key: "mutatingCollection", value: this.sortBooks(this.filterBooks(_.get(this.$store.state, this.collectionSource))) });
      if (this.$store.getters.searchIsActive) {
        if (!this.$store.getters.searchIsActive)
          this.fuseOptions.shouldSort = false;
        this.search();
      }
    },
    sort: function() {
      this.$compEmitter.emit("book-clicked", null);
      this.$store.commit("prop", { key: this.$store.getters.searchIsActive ? "searchCollection" : "mutatingCollection", value: this.sortBooks(this.$store.getters.collection) });
    },
    search: _.debounce(function(e, onLoad) {
      const newQueries = {};
      decodeURIComponent(this.$route.query.search);
      if (!onLoad) {
        this.$compEmitter.emit("book-clicked", null);
        newQueries.book = null;
      }
      const triggeredByEvent = e;
      if (triggeredByEvent) {
        this.fuseOptions.shouldSort = true;
        this.$store.commit("prop", { key: "searchQuery", value: e.target.value });
        newQueries.search = encodeURIComponent(e.target.value);
        if (e.target.value.trim() !== "") {
          if (this.$route.query.sort) {
            newQueries.sort = null;
            newQueries.sortDir = null;
          }
        } else {
          var activeSorter = _.find(this.$store.state.listRenderingOpts.sort, "current");
          newQueries.sort = activeSorter.key;
          newQueries.sortDir = activeSorter.active ? "desc" : "asc";
        }
      }
      this.$updateQueries(newQueries);
      if (this.$store.getters.searchIsActive) {
        const query = this.modifyQuery(this.$store.state.searchQuery);
        this.fuseOptions.keys = this.aliciaKeys;
        let vue = this;
        getFuse().then(function(Fuse) {
          vue.fuse = new Fuse.default(vue.$store.state.mutatingCollection, vue.fuseOptions);
          let result = vue.fuse.search(query);
          if (vue.useAutocomplete)
            vue.autocomplete(result);
          if (result.length > 0) {
            result = _.map(result, function(o) {
              return o.item;
            });
          }
          vue.$store.commit("prop", { key: "searchCollection", value: result });
        });
      } else {
        this.$store.commit("prop", { key: "searchCollection", value: [] });
      }
    }, 270, { leading: false, trailing: true }),
    autocomplete: function(result) {
      let sections = _.map(JSON.parse(JSON.stringify(this.aliciaKeys)), function(o, index) {
        o.key = o.name;
        o.name = o.name.replace(".name", "");
        o.active = index < 1;
        return o;
      });
      _.each(result, function(item) {
        _.each(item.matches, function(match) {
          const targetSection = _.find(sections, { key: match.key });
          targetSection.books = targetSection.books || [];
          targetSection.books.push({
            item: item.item,
            match,
            refIndex: item.refIndex,
            score: item.score
          });
        });
      });
      sections = _.filter(sections, "books");
      _.each(sections, function(section, i) {
        section.books = _.uniqBy(section.books, "match.value");
        section.books = section.books.slice(0, 5);
        if (section.books.length < 2)
          sections[i] = null;
        section.active = false;
      });
      sections = _.compact(sections);
      if (sections.length)
        sections[0].active = true;
      console.log("sections", sections);
      this.autocompleteResults = sections;
      console.log(sections);
    },
    active_ac_item: function(item) {
      _.each(this.autocompleteResults, function(o) {
        o.active = false;
      });
      item.active = true;
    },
    searchAutocompleteResult: function(book) {
      const searchQuery = book.match.value;
      this.$store.commit("prop", { key: "searchQuery", value: `"${searchQuery}"` });
      this.search();
    },
    searchEnterBlur: _.debounce(function(e) {
      this.$refs.searchInput.blur();
    }, 100, { leading: false, trailing: true }),
    restoreOptions: function() {
      updateListRenderingOpts();
    },
    focusOnSearch: function() {
      scroll({ top: 0 });
      this.$refs.searchInput.focus();
    },
    modifyQuery: function(query) {
      let newQuery = query;
      if (query.match(/&/i) || query.match(/ and /i) || query.match(/ a /i) || query.match(/ the /i)) {
        newQuery = query + "|" + query.replace(/ & /ig, " ") + "|" + query.replace(/ and /ig, " ") + "|" + query.replace(/ a /ig, " ") + "|" + query.replace(/ an /ig, " ") + "|" + query.replace(/ the /ig, " ");
      }
      return newQuery;
    },
    iosAutozoomDisable: function() {
      if (document.querySelector(".is-ios")) {
        const head = document.querySelector("head");
        let metaViewport = head.querySelector("meta[name=viewport]");
        metaViewport.content = "width=device-width, initial-scale=1.0, user-scalable=0";
        clearTimeout(this.enableZoomTimer);
        this.enableZoomTimer = setTimeout(function() {
          metaViewport.content = "width=device-width, initial-scale=1.0, user-scalable=1";
        }, 700);
      }
    }
  },
  computed: {
    aliciaKeys: function() {
      const filteredKeys = _.filter(
        this.$store.state.listRenderingOpts.scope,
        ["active", true]
      );
      return _.map(filteredKeys, function(item) {
        return { name: item.key, weight: item.weight || 0 };
      });
    },
    placeholder: function() {
      const placeholderKeys = function(keys) {
        return _.map(keys, function(key) {
          return key.name.replace(".name", "");
        }).join(", ");
      }(this.aliciaKeys);
      return "Search: " + placeholderKeys;
    }
  }
};
const _hoisted_1 = {
  id: "ale-search",
  ref: "aleSearch"
};
const _hoisted_2 = ["value", "placeholder"];
const _hoisted_3 = {
  key: 1,
  class: "autocomplete"
};
const _hoisted_4 = { class: "header-wrapper" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "Autocomplete: ", -1);
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "content" };
const _hoisted_8 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_page_title = __unplugin_components_0$3;
  const _component_gallery_library_wishlist_switcher = __unplugin_components_1$2;
  const _component_gallery_search_icons = __unplugin_components_2;
  const _component_gallery_search_options = __unplugin_components_3;
  const _component_gallery_view_mode_switcher = __unplugin_components_4$1;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_gallery_page_title),
    _ctx.$route.meta.subPage ? (openBlock(), createBlock(_component_gallery_library_wishlist_switcher, {
      key: 0,
      aboveSearch: true
    })) : createCommentVNode("", true),
    createBaseVNode("div", {
      id: "ale-search-wrap",
      ref: "searchWrap",
      class: normalizeClass({ "search-fixed": _ctx.fixedSearch, "highlight-search": _ctx.highlightSearch })
    }, [
      withDirectives(createBaseVNode("div", {
        id: "search-dropdown-overlay",
        onMousedown: _cache[0] || (_cache[0] = ($event) => _ctx.readyToCloseOpts = true),
        onTouchstart: _cache[1] || (_cache[1] = ($event) => _ctx.readyToCloseOpts = true),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => $options.dontCloseOpts && $options.dontCloseOpts(...args)),
        onClick: _cache[3] || (_cache[3] = (...args) => $options.closeOpts && $options.closeOpts(...args))
      }, null, 544), [
        [vShow, _ctx.listName]
      ]),
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", {
          class: "search-wrapper",
          onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$refs.searchInput.focus())
        }, [
          createBaseVNode("input", {
            type: "search",
            ref: "searchInput",
            value: _ctx.$store.state.searchQuery,
            onInput: _cache[4] || (_cache[4] = (...args) => $options.search && $options.search(...args)),
            onKeyup: _cache[5] || (_cache[5] = withKeys((...args) => $options.searchEnterBlur && $options.searchEnterBlur(...args), ["enter"])),
            placeholder: $options.placeholder,
            onFocus: _cache[6] || (_cache[6] = ($event) => _ctx.listName = false)
          }, null, 40, _hoisted_2)
        ]),
        createVNode(_component_gallery_search_icons, {
          "list-name": _ctx.listName,
          "onUpdate:list-name": _cache[8] || (_cache[8] = ($event) => _ctx.listName = $event)
        }, null, 8, ["list-name"]),
        _ctx.listName ? (openBlock(), createBlock(_component_gallery_search_options, {
          key: 0,
          "list-name": _ctx.listName,
          "onUpdate:list-name": _cache[9] || (_cache[9] = ($event) => _ctx.listName = $event)
        }, null, 8, ["list-name"])) : createCommentVNode("", true)
      ], 512),
      _ctx.$route.meta.gallery && _ctx.$store.state.windowWidth >= 450 ? (openBlock(), createBlock(_component_gallery_view_mode_switcher, { key: 0 })) : createCommentVNode("", true)
    ], 2),
    _ctx.useAutocomplete && _ctx.autocompleteResults && _ctx.autocompleteResults.length ? (openBlock(), createElementBlock("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        _hoisted_5,
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.autocompleteResults, (item) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["header", { active: item.active }]),
            key: item.key + "-header",
            onClick: ($event) => $options.active_ac_item(item)
          }, [
            createBaseVNode("div", null, toDisplayString(item.name), 1)
          ], 10, _hoisted_6);
        }), 128))
      ]),
      _ctx.item.active ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.autocompleteResults, (item) => {
        return openBlock(), createElementBlock("div", {
          class: "content-wrapper",
          key: item.key
        }, [
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item.books, (book) => {
              return openBlock(), createElementBlock("div", {
                onClick: ($event) => $options.searchAutocompleteResult(book)
              }, [
                createBaseVNode("span", null, toDisplayString(book.match.value), 1)
              ], 8, _hoisted_8);
            }), 256))
          ])
        ]);
      }), 128)) : createCommentVNode("", true)
    ])) : createCommentVNode("", true)
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_1 as _, __unplugin_components_0 as a };
//# sourceMappingURL=gallery-search.436556ed.js.map
