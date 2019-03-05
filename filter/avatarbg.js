function genreate() {
  var colors = ['#FEB594', '#F57280', '#C16C84','#6C5B7A','#345C7D','#14344D','#00305A'];
  return function getColor(name) {
    if (name.length === 2) {
      name = name[0].toLocaleLowerCase();
    }
    var aIndex =  'a'.charCodeAt(0);
    return  colors[(name.charCodeAt(0) - aIndex)  % colors.length];
  };
}
