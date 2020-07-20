var listController = (function () {


    function convertToHTML(string) {
        return "<li>" + string + "</li>";
    };

    return {
        generateList: function (stringArray) {
            var html = "";
            for (let index = 0; index < stringArray.length; index++) {
                html += convertToHTML(stringArray[index]);
            }
            return html;
        },

        descending: function (array) {
            array.sort(function (a, b) {
                var nameA = a.toUpperCase(); // ignore upper and lowercase
                var nameB = b.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        }
    }


})();

// UI Controller MODEL
var UIController = (function () {

    var DOMstrings = {
        boysList: 'boys',
        girlsList: 'girls',
        allList: 'all',
        addboy: 'addboy',
        newboy: 'newboy',
        addgirl: 'addgirl',
        newgirl: 'newgirl',
        removeboy: 'removeboy',
        removegirl: 'removegirl',
        firstRadioBtn: 'first',
        lastRadioBtn: 'last',
        revert: 'reverse',
        sortList: 'sort'
    };

    var DOMLists = {
        boys: ["Peter", "Lars", "ole"],
        girls: ["Janne", "hanne", "Sanne"],
        boysNew: ["Peter", "Lars", "ole"],
        girlsNew: ["Janne", "hanne", "Sanne"],
        toggle: toggleAllSort = true

    };

    return {
        getDOMstrings: function () {
            return DOMstrings;
        },

        getDOMLists: function () {
            return DOMLists;
        }
    }

})();


// Global APP Controller. Is used to interact between ListController og UI Controller
var controller = (function (listCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();
    var DOMList = UICtrl.getDOMLists();
    var allList = document.getElementById(DOM.allList);


    document.getElementById('reset').addEventListener('click', function () {
        controller.init();
    });


    // Add a boy to the list
    document.getElementById(DOM.addboy).addEventListener('click', function () {
        var newBoy = document.getElementById(DOM.newboy).value;
        if (newBoy.length > 0) {
            DOMList.boysNew.push(newBoy);
            // clear input field
            document.getElementById(DOM.newboy).value = '';
            //update List
            updateList();
        }

    });

    // Add a girl to the list
    document.getElementById(DOM.addgirl).addEventListener('click', function () {
        var newGirl = document.getElementById(DOM.newgirl).value;
        if (newGirl.length > 0) {
            DOMList.girlsNew.push(newGirl);
            // clear input field
            document.getElementById(DOM.newgirl).value = '';
            //update List
            updateList();
        }
    });

    // Remove a boy from the top of the List
    document.getElementById(DOM.removeboy).addEventListener('click', function () {
        let first = document.getElementById(DOM.firstRadioBtn).checked;
        let last = document.getElementById(DOM.lastRadioBtn).checked;
        // check which radio button is clicked, otherwise the top of the list is removed
        if (first === false) {
            DOMList.boysNew.pop();
        } else if (last === false) {
            DOMList.boysNew.shift();
        }
        updateList();
    });

    // Remove a girl from the top of the List
    document.getElementById(DOM.removegirl).addEventListener('click', function () {
        let first = document.getElementById(DOM.firstRadioBtn).checked;
        let last = document.getElementById(DOM.lastRadioBtn).checked;
        // check which radio button is clicked, otherwise the top of the list is removed
        if (first === false) {
            DOMList.girlsNew.pop();
        } else if (last === false) {
            DOMList.girlsNew.shift();
        }
        updateList();
    });

    // Reverse all names in the "ALL" coumn
    document.getElementById(DOM.revert).addEventListener('click', function () {
        var concatList = DOMList.boys.concat(DOMList.girls).reverse();
        document.getElementById(DOM.allList).innerHTML = listCtrl.generateList(concatList);
    });


    // function sortALL
    document.getElementById(DOM.sortList).addEventListener('click', function () {
        var concatList = DOMList.boysNew.concat(DOMList.girlsNew);
        listCtrl.descending(concatList);

        if (!DOMList.toggleAllSort) {
            concatList = concatList.reverse();

        }
        allList.innerHTML = listCtrl.generateList(concatList);
        DOMList.toggleAllSort = !DOMList.toggleAllSort;
    });


    function updateList() {
        // show all the boys
        document.getElementById(DOM.boysList).innerHTML = listCtrl.generateList(DOMList.boysNew);

        // show all the girls
        document.getElementById(DOM.girlsList).innerHTML = listCtrl.generateList(DOMList.girlsNew);
        // show all
        document.getElementById(DOM.allList).innerHTML = listCtrl.generateList(DOMList.boysNew.concat(DOMList.girlsNew));

    }


    return {

        init: function () {
            // show all the boys
            document.getElementById(DOM.boysList).innerHTML = listCtrl.generateList(DOMList.boys);
            // show all the girls
            document.getElementById(DOM.girlsList).innerHTML = listCtrl.generateList(DOMList.girls);
            // show all
            document.getElementById(DOM.allList).innerHTML = listCtrl.generateList(DOMList.boys.concat(DOMList.girls));
        }
    };

})(listController, UIController);


controller.init();