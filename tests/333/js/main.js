require.config({
  paths: {
    'jquery': 'thirdparty/jquery/jquery',
    'app': 'app/app'
  }
});
require(['jquery', 'app'], function($, app) {
  $(document).ready(app.start);
});