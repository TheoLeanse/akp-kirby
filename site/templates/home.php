<?php snippet('header') ?>
  <header>
    <span class="header__item">Anna Paterson</span>
    <a class="header__item" href="log">Log</a>
    <a class="header__item" href="info">Info</a>
  </header>
  <?= $page->text()->kirbytext() ?>
<?php snippet('footer') ?>
