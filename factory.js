class FilterFactory {
    constructor(tag, tagList) {
        if (tag === 'CAFLV_') return new CategoryListFactory('Test Title', tagList, tag);
        if (tag === 'STYLE_') return new CategoryListFactory('Style', tagList, tag);
        if (tag === 'TASTE_') return new CategoryListFactory('Taste', tagList, tag);
    }
}

class CategoryListFactory {
    constructor(title, tagList, tag) {
        this.title = title;
        this.list = tagList.filter((e) => e.includes(tag)).map(e => e.split('_')[1]);
    }
}

var incomingTags = [
    'CAFLV_Medium',
    'hasTeaVariants',
    'ORIGIN_Sri-lanka',
    'STYLE_Loose Leaf',
    'STYLE_Pouch',
    'STYLE_Tea Bags',
    'TASTE_Citrus',
    'TASTE_Fruity',
];

var tags = ['STYLE_', 'CAFLV_', 'TASTE_'];
var filterCategoryList = [];

tags.forEach(tag => {
    var filterDetails = new FilterFactory(tag, incomingTags);
    if (filterDetails.list.length > 0) {
        this.filterCategoryList.push(filterDetails)
    }
})


console.log(filterCategoryList);
