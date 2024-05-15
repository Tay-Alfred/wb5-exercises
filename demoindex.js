function onToyCategoryDropdownChange(){
    console.log("onToyCategoryDropdownChange")

    let selectedCategory = toyCategoryDropdown.value;
    console.log(selectedCategory);

    toyList.options.length = 0;

    let toysInCategory = get ToysForCategoryCode(selectedCategory);


    console.log(toysInCategory);

    for(let toy of toysInCategory)(
        addToynameToToyList(toy.name);
    )
}

function onToyListChange(){
    console.log("onToyListChange")

    let selectedToy = toyList.value;
    console.log(selectedToy);
    
}