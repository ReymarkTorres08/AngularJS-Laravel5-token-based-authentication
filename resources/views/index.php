<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Angular-Laravel Authentication</title>
	<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
</head>
<body ng-app="authApp">
	<div class="container">
	<br><br><br>
		<div ui-view></div>
	</div>
</body>

<!-- Application Dependencies -->
<script type="text/javascript" src="node_modules/angular/angular.js"></script>
<script type="text/javascript" src="node_modules/angular-ui-router/build/angular-ui-router.js"></script>
<script type="text/javascript" src="node_modules/satellizer/satellizer.js"></script>

<!-- Application Scripts -->
<script type="text/javascript" src="scripts/app.js"></script>
<script type="text/javascript" src="scripts/authController.js"></script>
<script type="text/javascript" src="scripts/userController.js"></script>
<script type="text/javascript" src="scripts/testController.js"></script>
</html>