$(function () {
    $('form').submit( eve => {
        eve.preventDefault();
        const a = $('#search').val();
        $('tbody').load('/Ratings/Search2?query=' + a);

        /*var response = await fetch('/Ratings/Search3?query=' + a);
        var data = await response.json;
        console.log(data);*/

       /* const template = $('#template').html();
        let results = '';
        for (var item in data) {
            let row = template;
            for (var key in date[item]) {
                console.log(key, data[item][key]);
                row = row.replaceAll('{' + key + '}', data[item][key]);
                row = row.replaceAll('%7B' + key + '%7D', data[item][key]);
            }
            results += row;
        }
        $('tbody').html(results);*/
    })
});