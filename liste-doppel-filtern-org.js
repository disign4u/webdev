!function () {
    const filters = {
        items: Array.from(document.querySelectorAll('.js-room')),
        inputs: document.querySelectorAll('.form-input'),
        changeFilter(e) {
            let value = e.target.value;
            let filter = e.target.dataset.filterOption;
            switch (filter) {
                case 'popular':
                    console.log(`${filter} sort: ${value}`);
                    // An und Aus prüfen
                    let checkbox = e.target;
                        if (checkbox.checked) {
                            console.log('Checkbox ist aktiviert');
                            filters.filteredArrays(true);
                        } else {
                            console.log('Checkbox ist nicht aktiviert');
                            filters.filteredArrays(false);
                        }
                    filters.filteredArrays(value);
                    break;
                case 'filterby':
                    console.log(`${filter} sort: ${value}`);
                    filters.filteredArrays(value);
                    break;
                case 'sortby':
                    console.log(`${filter} sort: ${value}`);
                    filters.sortedArrays(value);
                    break;
                default:
                    console.log(`Filter:${filter} Wert: ${value}`);
            }
        },
        sortedArrays(value) {
            // Array filter Version
            console.log(`filter value: ${value}`);

            //let sortedNumbers = numbers.sort((a, b) => a - b);
            //console.log(sortedNumbers); // Ausgabe: [1, 2, 5, 5, 6, 9]

        },
        filteredArrays(value) {
            // Array filter Version

            console.log(`filter value: ${value}`);

            //let filteredNumbers = numbers.filter(num => num > 4);
            //console.log(filteredNumbers); // Ausgabe: [5, 9, 5, 6]

        },
        init() {
            this.inputs.forEach((input) => {
                input.addEventListener('change', this.changeFilter);
            });
            return this.items;
        },
    };
    filters.init();
}();
