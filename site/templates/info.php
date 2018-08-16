<?php snippet('header') ?>
	<header>
		<a class="header__item" href="/">Anna Paterson</a>
		<a class="header__item" href="log">Log</a>
		<span class="header__item"><?= $page->email()->kirbytext() ?></span>
	</header>
    <?= $page->text()->kirbytext() ?>
<?php snippet('footer') ?>
