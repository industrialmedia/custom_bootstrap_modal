<?php

namespace Drupal\custom_bootstrap_modal\Render\MainContent;

use Drupal\Core\Render\MainContent\DialogRenderer;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\custom_bootstrap_modal\Ajax\OpenCustomBootstrapModalCommand;



/**
 * Default main content renderer for modal dialog requests.
 */
class CustomBootstrapModalRenderer extends DialogRenderer {
  /**
   * {@inheritdoc}
   */
  public function renderResponse(array $main_content, Request $request, RouteMatchInterface $route_match) {
    $response = new AjaxResponse();

    $title = '';
    // First render the main content, because it might provide a title.
    $content = \Drupal::service('renderer')->renderRoot($main_content);

    // Attach the library necessary for using the OpenModalDialogCommand and set
    // the attachments for this Ajax response.

    $response->addCommand(new OpenCustomBootstrapModalCommand($title, $content));
    $response->setAttachments($main_content['#attached']);
    return $response;
  }

}
