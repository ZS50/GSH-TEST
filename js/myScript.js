var arrItems = {
    'product_1': [],
    'product_2': [],
};

var temArr = {};
var dataFor = "";

arrItems[dataFor] = {};

function fnAddItem(elm, itemInd, rem) {
    if (elm != "" && elm != undefined) {
        var _name = $(elm).attr("data-name");
        var _id = $(elm).attr("data-id");
        var _in = $(elm).attr("data-index");
        itemInd = _in;

        arrItems[dataFor][_in] = {
            'name': _name,
            'id': _id,
            'index': _in
        };
    }
    var strHtml = "";
    $.each(arrItems[dataFor], function(key, value) {

        if (value['name'] != undefined || value['name'] != null)
            strHtml += '<div class="__selected_item"><span>' + (value['index'] == 1 ? " " : "") + value['name'] + (value['index'] == 3 ? "" : "") + '</span><span class="x">&times;</span></div>';
        $('.__search_txt').hide();
    });
    if (Object.keys(arrItems[dataFor]).length > 0) {

        $("[data-item-collection]").html(strHtml);
        if (itemInd != 1) {

            $("[data-step='" + itemInd + "']").hide();

            if (rem)
                $("[data-step='" + steps + "']").show();
            else
                $("[data-step='" + parseInt(Object.keys(arrItems[dataFor]).length) + "']").show();
        }
        else {
            $("[data-step]").hide();
            $("[data-step='2']").show();
        }

    } else {
        $("[data-step]").hide();
        $("[data-step='0']").show();
    }
}

function fnAddComment() {
    var _cmnt = $("[data-index='3']");
    if (_cmnt.val() != "") {
        _cmnt.attr("data-name", _cmnt.val());
        fnAddItem(_cmnt);
        $('#submit').prop('disabled', false);
    }
}
fnAddItem();

$("#usr_commt").keyup(function() {
    var _val = $(this).val();
    if (_val != "") {
        $("#submit_cmt").prop("disabled", false);
    } else {
        $("#submit_cmt").prop("disabled", true);
    }
});

