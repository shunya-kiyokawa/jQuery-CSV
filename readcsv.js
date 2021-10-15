$(window).load(function () {
    function readCsv(data) {
        var target = '#itemlist';
        var csv = $.csv.toArrays(data);
        var itemlist = '';
        $(csv).each(function () {
            itemlist += '<tr><td>' + this[0] + '</td><td>' + this[1] + '</td><td>' + this[2] + '</td></tr>';
        });
        $(target).append(itemlist);
    }
    var csvfile = './itemlist.csv';
    $(function () {
        $.get(csvfile, readCsv, 'text');
    });
})