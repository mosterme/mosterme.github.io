var bullshit = function () {

    /** glyphicons for alert, confirm, prompt */
    var glyphicons = 'glyphicon-info-sign glyphicon-exclamation-sign glyphicon-question-sign', glyphs = glyphicons.split(' ');

    /** fallback bootstrap modal dialog html  */
    var fallback = '<div class="modal" id="bullshit-dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"><span class="glyphicon bullshit-icon" aria-hidden="true"></span> <span class="bullshit-text"></span></h4></div><div class="modal-body"><span class="bullshit-message"></span> <input type="text" class="form-control bullshit-value"></div><div class="modal-footer"><button type="button" class="btn btn-default alert-success bullshit-ok"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></button><button type="button" class="btn btn-default alert-danger" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></div></div></div></div>';

    /** returns the "#bullshit-dialog". creates one from fallback if needed. */
    var shit = function () {
        var modal = $('#bullshit-dialog');
        if (modal.length == 0) {
            return $(fallback).appendTo('body');
        }
        return modal;
    };

    /** https://developer.mozilla.org/en-US/docs/Web/API/window/alert */
    var alert = function (message) {
        var modal = shit();
        modal.find('.bullshit-icon').removeClass(glyphicons).addClass(glyphs[0]);
        modal.find('.bullshit-ok').hide();
        modal.find('.bullshit-text').hide(); 
        modal.find('.bullshit-value').hide();
        modal.find('.bullshit-message').html(message).show();
        modal.modal('show');
    };

    /** https://developer.mozilla.org/en-US/docs/Web/API/window/confirm */
    var confirm = function (message, handler) {
        var modal = shit();
        modal.find('.bullshit-icon').removeClass(glyphicons).addClass(glyphs[1]);
        modal.find('.bullshit-text').hide();
        modal.find('.bullshit-value').hide();
        modal.find('.bullshit-ok').show().off('click').on('click', function() {modal.modal('hide'); if (handler) handler(true)}); 
        modal.find('.bullshit-message').html(message).show();
        modal.modal('show');
    };

    /** https://developer.mozilla.org/en-US/docs/Web/API/window/prompt */
    var prompt = function (text, value, handler) {
        var modal = shit(), input = modal.find('.bullshit-value');
        modal.find('.bullshit-icon').removeClass(glyphicons).addClass(glyphs[2]); 
        modal.find('.bullshit-message').hide();
        modal.find('.bullshit-ok').show().off('click').on('click', function() {modal.modal('hide'); if (handler) handler($('.bullshit-value').val())});
        modal.find('.bullshit-text').html(text).show();
        modal.modal('show'); input.val(value).show().select();
    };

    return {
        alert   : alert,
        confirm : confirm,
        prompt  : prompt
    }

}();
