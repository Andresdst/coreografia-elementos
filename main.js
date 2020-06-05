class Dim {
  static getWidth(el) {
    //obteniendo estilos
    //con currentStyle o atravez de la ventana
    let style = (el.currentStyle = window.getComputedStyle(el));
    console.log(
      el.offsetWidth +
        parseFloat(style.marginRight) +
        parseFloat(style.marginLeft)
    );
    return (
      el.offsetWidth +
      parseFloat(style.marginRight) +
      parseFloat(style.marginLeft)
    );
  }
}

class Coreografia {
  constructor(container_selector, item_selector) {
    this.container = document.querySelector(container_selector);
    this.elements = this.container.querySelectorAll(item_selector);

    this.elements.forEach((element) => {
      element.style.opacity = 0; //por defecto ocultos
    });
    this.setDelay();
  }

  setDelay() {
    let itemWidth = Dim.getWidth(this.elements[1]); //saber ancho de un elemento
    let itemsXRow = Math.floor(this.container.clientWidth / itemWidth); //saber catidad de columnas

    console.log("this.container.clientWidth: " + this.container.clientWidth);
    console.log("itemxrox: " + itemsXRow);

    //recorrer arreglo en tandas de item por row
    for (let i = 0; i < this.elements.length; i += itemsXRow) {
      for (let j = i; j < i + itemsXRow; j++) {
        let xPos = parseInt(i / itemsXRow);
        //console.log(xPos);
        let yPos = j - i;

        //sumando ambos valores para asignar delay de acuerdo a posicion en matriz
        let SumaPos = xPos + yPos;

        this.elements[i + (j - i)].style.animationDelay = SumaPos * 50 + "ms";
      }
    }

    this.elements.forEach((ele) => {
      ele.classList.add("zoomIn");
    });
  }
}

(function () {
  new Coreografia(".row", ".card");
})();
