"use strict";
!function () {
    // Ein Objekt 'filters' definieren, um alle filterbezogenen Methoden und Eigenschaften zu halten
    const filters = {
        // Der Container, in dem die gefilterten Elemente angezeigt werden
        container: document.querySelector('.flex'),
        // Alle Elemente, die gefiltert werden können
        items: Array.from(document.querySelectorAll('.js-room')),
        // Ein Array, um die ursprünglichen ungeordneten Elemente zu halten
        unsorted: [],
        // Alle Eingabeelemente, die eine Filter-/Sortieraktion auslösen können
        inputs: document.querySelectorAll('.form-input'),
        // Methode zur Behandlung von Filter-/Sortieraktionen
        changeFilter(e) {
            // Der Wert des Eingabeelements, das die Aktion ausgelöst hat
            const value = e.target.value;
            // Die Art der durchzuführenden Filter-/Sortieraktion
            const filter = e.target.dataset.filterOption;
            // Führen Sie die entsprechende Aktion basierend auf dem Filtertyp aus
            switch (filter) {
                case 'popular':
                    filters.filteredArrays(e.target.checked);
                    break;
                case 'filterby':
                    filters.filteredArrays(value);
                    break;
                case 'sortby':
                    filters.sortedArrays(value);
                    break;
            }
        },
        // Methode zum Sortieren der Elemente
        sortedArrays(value) {
            let items = filters.items;
            // Wenn die Sortieraktion auf dem Preis basiert
            if(value === 'price:higher' || value === 'price:lower') {
                // Sortieren Sie die Elemente nach ihrem Preis
                items.sort( (a,b) =>{
                    const priceA = a.dataset.filterSortVal;
                    const priceB = b.dataset.filterSortVal;
                    // Wenn die Sortieraktion darin besteht, nach höherem Preis zu sortieren, sortieren Sie in absteigender Reihenfolge
                    // Andernfalls sortieren Sie in aufsteigender Reihenfolge
                    return value === 'price:higher' ? priceB - priceA : priceA - priceB;
                });
            } else {
                // Wenn die Sortieraktion nicht auf dem Preis basiert, kehren Sie zu den ursprünglichen ungeordneten Elementen zurück
                items = filters.unsorted;
            }
            // Aktualisieren Sie den Container mit den sortierten Elementen
            this.updateContainer(items);
        },
        // Methode zum Filtern der Elemente basierend auf der Beliebtheit
        filteredArrays(value) {
            filters.items.forEach((item)=> {
                const data = item.dataset.filterPopular;
                // Wenn die Filteraktion darin besteht, nach Beliebtheit zu filtern
                if (value === true){
                    // Wenn das Element beliebt ist, zeigen Sie es an
                    // Andernfalls verstecken Sie es
                    (data=='1') ? item.classList.remove('visuallyhidden'): item.classList.add('visuallyhidden');
                } else {
                    // Wenn die Filteraktion nicht darin besteht, nach Beliebtheit zu filtern, zeigen Sie alle Elemente an
                    item.classList.remove('visuallyhidden') ;
                }
            });
        },
        // Methode zum Aktualisieren des Containers mit den gefilterten/sortierten Elementen
        updateContainer(items) {
            // Leeren Sie den Container
            this.container.innerHTML = '';
            // Fügen Sie die gefilterten/sortierten Elemente dem Container hinzu
            items.forEach(item => this.container.appendChild(item));
        },
        // Methode zur Initialisierung des Filters-Objekts
        init() {
            // Speichern Sie die ursprünglichen ungeordneten Elemente
            this.unsorted = Array.from(this.items);
            // Fügen Sie den Eingabeelementen Ereignis-Listener hinzu, um eine Filter-/Sortieraktion auszulösen, wenn sie geändert werden
            this.inputs.forEach((input) => {
                input.addEventListener('change', this.changeFilter);
            });
            // Geben Sie die Elemente zurück
            return this.items;
        },
    };
    // Initialisieren Sie das Filters-Objekt
    filters.init();
}();