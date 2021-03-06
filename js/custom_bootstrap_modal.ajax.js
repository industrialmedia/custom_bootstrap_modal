/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal) {
    Drupal.behaviors.custom_bootstrap_modal = {
        attach: function attach(context, settings) {
            var $context = $(context);

            if (!$('#drupal-modal').length) {
                $('<div id="drupal-modal" class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"></div></div></div>').hide().appendTo('body');

            }
            if (!$('.modal-close').length) {
                $('<button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>').prependTo('.modal-content');
            }

        },
    };

    Drupal.AjaxCommands.prototype.openCustomBootstrapModal = function (ajax, response, status) {
        if (!response.selector) {
            return false;
        }
        var $dialog = $(response.selector);
        if (!$dialog.length) {
            // $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="ui-front"/>').appendTo('body');
            $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"></div></div></div>').hide().appendTo('body');

        }

        if (!$('.modal-close').length) {
            $('<button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>').prependTo('.modal-content');
        }
        
        if (!ajax.wrapper) {
            // ajax.wrapper = '#' + $dialog.attr('id') + ' .modal-content';
            response.selector = response.selector.toString() + ' .modal-content';
        }

        response.command = 'insert';
        response.method = 'html';

        if (response.dialogOptions.modalDialogWrapBody === undefined || (response.dialogOptions.modalDialogWrapBody === true || response.dialogOptions.modalDialogWrapBody == 'true')) {
            response.data = '<div class="modal-body">' + response.data + '</div>';
        }

        ajax.commands.insert(ajax, response, status);




        $dialog.modal('show');


    };


})(jQuery, Drupal);
