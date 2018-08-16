<?php snippet('header') ?>
  <header>
    <a class="header__item" href="/">Anna Paterson</a>
    <a class="header__item" href="log">Log</a>
    <a class="header__item" href="info">Info</a>
  </header>
  <?= $page->text()->kirbytext() ?>
<?php snippet('footer') ?>
