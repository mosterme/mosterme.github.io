var bullshit = function () {

  /** glyphicons for alert, confirm, prompt, login */
  var glyphicons = 'glyphicon-info-sign glyphicon-exclamation-sign glyphicon-question-sign glyphicon-log-in', glyphs = glyphicons.split(' ');

  /** fallback bootstrap modal dialog html */
  var fallback = '<div class="modal" id="bullshit-dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">×</button><h4 class="modal-title"><span class="glyphicon bullshit-icon"></span></h4></div><div class="modal-body"><div class="bullshit-d bullshit-prompt"><label for="bullshit-value"><span class="bullshit-text"></span></label><input class="bullshit-value form-control" name="bullshit-value" type="text"></div><span class="bullshit-d bullshit-alert bullshit-confirm bullshit-message"></span><div class="bullshit-d bullshit-login"><label for="bullshit-user"><span class="glyphicon glyphicon-user"></span></label> <input id="bullshit-user" name="bullshit-user" value="" type="text"><br /><label for="bullshit-pass"><span class="glyphicon glyphicon-lock"></span></label> <input id="bullshit-pass" name="bullshit-pass" value="" type="password"></div></div><div class="modal-footer"><button type="button" class="btn btn-default alert-success bullshit-ok bullshit-d bullshit-confirm bullshit-prompt bullshit-login"><span class="glyphicon glyphicon-ok"></span></button><button type="button" class="btn btn-default alert-danger" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button></div></div></div></div>';

  /** returns the "#bullshit-dialog". creates one from fallback if needed. */
  var shit = function () {
    var modal = $('#bullshit-dialog');
    if (modal.length === 0) {
      return $(fallback).appendTo('body');
    }
    return modal;
  };

  /** https://developer.mozilla.org/en-US/docs/Web/API/window/alert */
  var alert = function (message) {
    var modal = shit();
    modal.find('.bullshit-icon').removeClass(glyphicons).addClass(glyphs[0]);
    modal.find('.bullshit-d').hide(); modal.find('.bullshit-alert').show();
    modal.find('.bullshit-message').html(message);
    modal.modal('show');
  };

  /** https://developer.mozilla.org/en-US/docs/Web/API/window/confirm */
  var confirm = function (message, handler) {
    var modal = shit();
    modal.find('.bullshit-icon').removeClass(glyphicons).addClass(glyphs[1]);
    modal.find('.bullshit-d').hide(); modal.find('.bullshit-confirm').show();
    modal.find('.bullshit-ok').off('click').on('click', function(){if (handler) handler(true); modal.modal('hide');});
    modal.find('.bullshit-message').html(message);
    modal.modal('show');
  };

  /** https://developer.mozilla.org/en-US/docs/Web/API/window/prompt */
  var prompt = function (text, value, handler) {
    var modal = shit();
    modal.find('.bullshit-icon').removeClass(glyphicons).addClass(glyphs[2]);
    modal.find('.bullshit-d').hide(); modal.find('.bullshit-prompt').show();
    modal.find('.bullshit-text').html(text);
    modal.find('.bullshit-ok').off('click').on('click', function(){if (handler) handler($('.bullshit-value').val()); modal.modal('hide');});
    modal.modal('show');
    modal.find('.bullshit-value').val(value).select();
  };

  var login = function (handler) {
    var modal = shit();
    modal.find('.bullshit-icon').removeClass(glyphicons).addClass(glyphs[3]);
    modal.find('.bullshit-d').hide(); modal.find('.bullshit-login').show();
    modal.find('.bullshit-ok').off('click').on('click', function(){if (handler) handler($('#bullshit-user').val(), $('#bullshit-pass').val()); modal.modal('hide');});
    modal.modal('show');
  };

  return {
    alert   : alert,
    confirm : confirm,
    prompt  : prompt,
    login   : login
  };

}();