document.addEventListener("DOMContentLoaded", (event) => {

    function resizeGridItem(item) {
        // debugger;
        grid = document.getElementsByClassName("submenu")[0];
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        rowSpan = Math.ceil((item.scrollHeight + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = "span " + rowSpan;
    }

    function resizeAllGridItems() {
        console.log("resize")
        allItems = document.querySelectorAll(".submenu > li");
        for (x = 0; x < allItems.length; x++) {
            resizeGridItem(allItems[x]);
        }
    }

    function resizeInstance(instance) {
        item = instance.elements[0];
        resizeGridItem(item);
    }

    window.onload = resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);

    // allItems = document.querySelectorAll(".submenu > li");
    // for (x = 0; x < allItems.length; x++) {
    //     imagesLoaded(allItems[x], resizeInstance);
    // }

});