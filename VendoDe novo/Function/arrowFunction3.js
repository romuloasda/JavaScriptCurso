let comparaComthis = function (param) {
  console.log(this === param);
};

comparaComthis(global);

const obj = {};
comparaComThis = comparaComthis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
