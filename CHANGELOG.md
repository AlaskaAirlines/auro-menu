# Semantic Release Automated Changelog

# [3.5.0](https://github.com/AlaskaAirlines/auro-menu/compare/v3.4.0...v3.5.0) (2022-04-14)


### Features

* **active:** new handling for marking options as active [#120](https://github.com/AlaskaAirlines/auro-menu/issues/120) ([c43d3bc](https://github.com/AlaskaAirlines/auro-menu/commit/c43d3bc40bc6f6d983ecb47294eb83b92c68c04d))
* **customevent:** support a custom event fired from a menu option [#35](https://github.com/AlaskaAirlines/auro-menu/issues/35) ([39baaea](https://github.com/AlaskaAirlines/auro-menu/commit/39baaeadf3deffe0b728eaedd960a26a65acab45))
* **event:** send consistent event notifying that a custom event was fired ([0d570cc](https://github.com/AlaskaAirlines/auro-menu/commit/0d570cce46be1cf81f4f92d6772100875262e965))

# [3.4.0](https://github.com/AlaskaAirlines/auro-menu/compare/v3.3.1...v3.4.0) (2022-04-11)


### Features

* **preselect:** add new selectByValue public method [#118](https://github.com/AlaskaAirlines/auro-menu/issues/118) ([3876c91](https://github.com/AlaskaAirlines/auro-menu/commit/3876c917d6e93b4d61c1e2ee7b715a60fcd8d3e3))

## [3.3.1](https://github.com/AlaskaAirlines/auro-menu/compare/v3.3.0...v3.3.1) (2022-03-29)


### Bug Fixes

* **hidden:** prevent selection of hidden options [#114](https://github.com/AlaskaAirlines/auro-menu/issues/114) ([7640e7a](https://github.com/AlaskaAirlines/auro-menu/commit/7640e7a0b0c23ef0ac1fbf98d673813edab87bc4))

# [3.3.0](https://github.com/AlaskaAirlines/auro-menu/compare/v3.2.0...v3.3.0) (2022-03-28)


### Features

* **API:** apply API updates [#112](https://github.com/AlaskaAirlines/auro-menu/issues/112) ([260aea7](https://github.com/AlaskaAirlines/auro-menu/commit/260aea71116df3535245117cdcceeb213a394ee8))
* **API:** expose selectNextItem() and makeSelection() [#106](https://github.com/AlaskaAirlines/auro-menu/issues/106) ([9320837](https://github.com/AlaskaAirlines/auro-menu/commit/932083747608903a21e89aebcb616906db5c584c))
* **hidden:** add support for hidden menuoptions [#111](https://github.com/AlaskaAirlines/auro-menu/issues/111) ([387356d](https://github.com/AlaskaAirlines/auro-menu/commit/387356df46379119943c437984914044c1f0f6ae))
* **hover:**  state now follows mouseover ([a55ab11](https://github.com/AlaskaAirlines/auro-menu/commit/a55ab118fe85ada5d5dea8e0a09b110ce1efe838))

# [3.2.0](https://github.com/AlaskaAirlines/auro-menu/compare/v3.1.0...v3.2.0) (2022-03-21)


### Bug Fixes

* **aria:** correct invalid use of aria-selected ([c84e1f1](https://github.com/AlaskaAirlines/auro-menu/commit/c84e1f19002c8076a7e65ddf1ed18a0810c319f7))
* **styles:** all menuoptions prevent text selection ([8240bdc](https://github.com/AlaskaAirlines/auro-menu/commit/8240bdc63d659df7d8ee378c851fef2a11036e34))


### Features

* **API:** add optionSelected property ([56f0415](https://github.com/AlaskaAirlines/auro-menu/commit/56f041557c4e83ad2cece5d5fd18fbdc99788dfd))
* **matching:** highlight matched string parts in options ([ccf6f12](https://github.com/AlaskaAirlines/auro-menu/commit/ccf6f12c4e9a999a6136306b25170bf6b067a192))
* **nesting:** support nested menus ([2dd3433](https://github.com/AlaskaAirlines/auro-menu/commit/2dd34334d8d90457fa32d41f66615d9ce85e67fc))

# [3.1.0](https://github.com/AlaskaAirlines/auro-menu/compare/v3.0.0...v3.1.0) (2022-03-01)


### Features

* **a11y:** increase interactive keyboard experience [#55](https://github.com/AlaskaAirlines/auro-menu/issues/55) [#64](https://github.com/AlaskaAirlines/auro-menu/issues/64) ([405e033](https://github.com/AlaskaAirlines/auro-menu/commit/405e03365f109be8f83e05d2d5d876787eb8b112))

# [3.0.0](https://github.com/AlaskaAirlines/auro-menu/compare/v2.2.1...v3.0.0) (2022-01-26)


### chore

* **deps:** update dependencies and vulnerabilities ([823de79](https://github.com/AlaskaAirlines/auro-menu/commit/823de7954808d45a66b55825dd964728c85778b5))


### BREAKING CHANGES

* **deps:** retroactive MAJOR release tag
New version was accidentally released under v2.2 tag

Changes to be committed:
modified:   package-lock.json
modified:   package.json

## [2.2.1](https://github.com/AlaskaAirlines/auro-menu/compare/v2.2.0...v2.2.1) (2022-01-25)


### Bug Fixes

* **API:** include value data in optionSelected event ([406649f](https://github.com/AlaskaAirlines/auro-menu/commit/406649fc202913956d7df76fd89cf1135f8fb695))

# [2.2.0](https://github.com/AlaskaAirlines/auro-menu/compare/v2.1.0...v2.2.0) (2022-01-22)


### Bug Fixes

* **a11y:** address event firing from keyboard ([d4fbe92](https://github.com/AlaskaAirlines/auro-menu/commit/d4fbe92a876816b335ec98eebbd67dbc3b558b02))
* **css:** address ui issues from review ([bfe54ff](https://github.com/AlaskaAirlines/auro-menu/commit/bfe54ffa3e49d44e1b505db6f8f43aec7630a8b1))
* **dom template:** remove unnecessary DOM; address ellipsis feature ([20cf785](https://github.com/AlaskaAirlines/auro-menu/commit/20cf785fd08f552a8f036f6477f8c26fcd0970a0))
* **style:** adjust font weight [#6](https://github.com/AlaskaAirlines/auro-menu/issues/6) ([d652c82](https://github.com/AlaskaAirlines/auro-menu/commit/d652c8214e9f5e4da5c8d7ee5b2aa517e0ad4529))


### Features

* **disabled:** add support for disabled menu option [#25](https://github.com/AlaskaAirlines/auro-menu/issues/25) ([1cc08d4](https://github.com/AlaskaAirlines/auro-menu/commit/1cc08d4509f19202504d78f472f808ef42c417ce))
* **hr:** add support for hr ui [#70](https://github.com/AlaskaAirlines/auro-menu/issues/70) ([c7f89da](https://github.com/AlaskaAirlines/auro-menu/commit/c7f89da61f8898cf64245729e74935e8f34402c0))


### Performance Improvements

* **icon:** update to support direct dependency with icon ([e50de2b](https://github.com/AlaskaAirlines/auro-menu/commit/e50de2b31e88f17b6c841d52b13ff85b5a4f7062))
* **mdmagic:** reduce scope of mdmagic docs ([cac8a84](https://github.com/AlaskaAirlines/auro-menu/commit/cac8a8458113fad51e22bb784713414de7e31842))

# [2.1.0](https://github.com/AlaskaAirlines/auro-menu/compare/v2.0.0...v2.1.0) (2022-01-07)


### Features

* **preset:** better handling of presetting value ([f43e85d](https://github.com/AlaskaAirlines/auro-menu/commit/f43e85df8c9a14f1f70d5320b7ac39c5ddb05fe1))

# [2.0.0](https://github.com/AlaskaAirlines/auro-menu/compare/v1.2.2...v2.0.0) (2021-12-14)


### Bug Fixes

* **template:** fix marked version in template index ([3534dbb](https://github.com/AlaskaAirlines/auro-menu/commit/3534dbbef7bb8b024fb59807b0ddf3aef5d4e32e))


### Code Refactoring

* **API:** doc change to log breaking change ([ba8996d](https://github.com/AlaskaAirlines/auro-menu/commit/ba8996dfe8f5c7ea668a15b12a1e3579703a4db5))


### BREAKING CHANGES

* **API:** API to dynamically control template changed.

## [1.2.2](https://github.com/AlaskaAirlines/auro-menu/compare/v1.2.1...v1.2.2) (2021-09-09)


### Bug Fixes

* **style:** address issue with duplicate dividers [#18](https://github.com/AlaskaAirlines/auro-menu/issues/18) ([8be19ad](https://github.com/AlaskaAirlines/auro-menu/commit/8be19adce221aaa16b08945e93e5eb423159097a))

## [1.2.1](https://github.com/AlaskaAirlines/auro-menu/compare/v1.2.0...v1.2.1) (2021-06-14)


### Bug Fixes

* handle slot change updates index on dynamic updates to options [#11](https://github.com/AlaskaAirlines/auro-menu/issues/11) ([ef53494](https://github.com/AlaskaAirlines/auro-menu/commit/ef5349468a29adc48511e2f7a0db2c336e64ffb5))

# [1.2.0](https://github.com/AlaskaAirlines/auro-menu/compare/v1.1.0...v1.2.0) (2021-06-09)


### Features

* added style for submenu ([09981da](https://github.com/AlaskaAirlines/auro-menu/commit/09981daf2e238661b4ee53ce40c3fbcbb96e23f4))
* created submenu component which contains options ([146cb66](https://github.com/AlaskaAirlines/auro-menu/commit/146cb6625cc82d0ee9651fa8810e8aedb91ab4dd))

# [1.1.0](https://github.com/AlaskaAirlines/auro-menu/compare/v1.0.0...v1.1.0) (2021-05-12)


### Features

* adding more details for apiBuild ([2fc06c8](https://github.com/AlaskaAirlines/auro-menu/commit/2fc06c8141b3e84f80d959cd6e4a66d91213e12f))
* demo.md examples ([1a1a278](https://github.com/AlaskaAirlines/auro-menu/commit/1a1a2780b4e41e315d998f16b17a9bdefa38788a))
* fixed typo when merge happened ([3b5fd40](https://github.com/AlaskaAirlines/auro-menu/commit/3b5fd40850fd9f5b24658674a24aeeaaec97358c))
* some cleaning up ([f318904](https://github.com/AlaskaAirlines/auro-menu/commit/f318904e05858885d841bd169ab0142ca7aec327))
* work for 587523 auro-dropdown ([712a72b](https://github.com/AlaskaAirlines/auro-menu/commit/712a72bb1139d043b08a59d3e40f9025deb39f32))

# 1.0.0 (2021-04-14)


### Features

* transferred dev and test files from initDev to main branch ([e18551e](https://github.com/AlaskaAirlines/auro-menu/commit/e18551edaadfac99602ce9328a88b507916a5d00))
* transferred files from BrentLabasan/auro-menu ([f42d9c9](https://github.com/AlaskaAirlines/auro-menu/commit/f42d9c9012c7e75f2448ea0ae094e1bd31210568))
