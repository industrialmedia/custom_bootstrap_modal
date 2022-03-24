<?php

namespace Drupal\custom_bootstrap_modal\Ajax;

use Drupal\Core\Ajax\OpenModalDialogCommand;

/**
 * Defines an AJAX command to open certain content in a dialog in a modal dialog.
 *
 * @ingroup ajax
 */
class OpenCustomBootstrapModalCommand extends OpenModalDialogCommand {
  /**
   * Implements \Drupal\Core\Ajax\CommandInterface:render().
   */
  public function render() {
    // For consistency ensure the modal option is set to TRUE or FALSE.
    $this->dialogOptions['modal'] = isset($this->dialogOptions['modal']) && $this->dialogOptions['modal'];
    return [
      'command' => 'openCustomBootstrapModal',
      'selector' => $this->selector,
      'settings' => $this->settings,
      'data' => $this->getRenderedContent(),
      'dialogOptions' => $this->dialogOptions,
    ];
  }
}
