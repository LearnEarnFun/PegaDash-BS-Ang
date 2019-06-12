# Pega Dashboard Version Commercial Banking
# SB Admin rewritten in Angular7 and Bootstrap 4


Simple Dashboard Admin App built using Angular 7 and Bootstrap 4

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v7.0](http://startbootstrap.com/template-overviews/sb-admin-2/) to Angular7 Theme.

Powered by [StartAngular](http://startangular.com/) & [StrapUI](http://strapui.com/)

## [Demo](http://rawgit.com/start-angular/SB-Admin-BS4-Angular-7/master/dist/)

## [SB Admin Material version](https://github.com/start-javascript/sb-admin-material)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.
 
## MPG Notes
I added ngx-currency [ngx-currency](https://www.npmjs.com/package/ngx-currency)  to help process currency values with commas for thoushands and the currency symbol ***$ 1,234,567.89***


# Installation:
Download the package:

###  1. **npm install**

###  2. **npm start**

## ng2-charts needs to be specifically v2.2.3 for the current time
  * [ng2-chart run errors Injectable, ɵɵdefineInjectable](https://github.com/valor-software/ng2-charts/issues/1115)

  * [export 'ɵɵdefineInjectable' was not found in '@angular/core'](https://stackoverflow.com/questions/56371427/warning-in-node-modules-ng2-charts-fesm5-ng2-charts-js-23054-72-export-%C9%B5%C9%B5de)


Recent Interactions    D_InteractionHistory    app-recent-interactions

| Portlet Title           	| Datapage             	| Selector                	  |  Coponent 	                          |
|-------------------------	|----------------------	|-------------------------	  |-------------------------------------	|
| **Case List**           	| cases               	| app-caselist            	  |  /pega/app-caselist  	                |
| **Email by Category**   	| D_GetEmailsByCategory	| app-email-by-category      	|  /pega/kpi-report/email-by-category  	|
| **Mega Menu**          	  | D_CustomerIntentTasks	| app-mega-menu           	  |  /pega/mega-menu  	                  |
| **Recent Cases**         	| D_RecentTreasurerCases| app-recentTreasurerCaseList	|  /pega/recentTreasurerCaseList  	    |
| **Recent Interactions** 	| D_InteractionHistory 	| app-recent-interactions 	  |  /pega/recent-interactions    	      |
| **Recent Treasurer**     	| D_TransactionSummary 	| app-transaction-summary  	  |  /pega/transaction-summary  	        |
| **Top requests**        	| D_OpenWorkByType    	| app-open-by-work-type  	    |  /pega/open-by-work-type  	          |
| **Unified Task List**   	| D_UnifiedWorkList    	| app-unifiedtasklist      	  |  /pega/unifiedtasklist              	|
| **Un-named**             	| D_RecentTreasurerCases| app-recentTreasurerCaseList |  /pega/recentTreasurerCaseList       	|

<hr>

**NEXEN Colors**

| Color Ref               | Color RGB  |
|-------------------------|------------|
|  $bnymNexenPrimary:     |#1A7383   |
|  $bnymNexenGreenGradTop |#167A82|
|  GreenGradBottom        |#1F7E81|
|  $bnymNexenBlue:        |#2D3B4F|
|  $bnymNexenBlue:        |#1A7383|
|  $bnyDarkBlue:  |#2F3952 |

**BNYM Colors**

|Color Ref                | Color RGB  |
|-------------------------|-----------|
|  $bnyPrimary:    |  9C906F|
|  $bnyDarkGray:  |#4f4c4d |
|  $bnyLightGray: |#a7a5a6 |
|  $bnyBronze:    |#b07e25 |
|  $bnyGold:      |#a49668 |



####Cleanup
const loginUserName = localStorage.getItem('username');



<!-- 
Useful links/sites;

Badges:
[Badge Color Styles](https://getbootstrap.com/docs/4.0/components/badge/)
### Introduction

Provides fast, reliable and extensible starter for the development of Angular projects.

`sb-admin-bs4-angular7` provides the following features:

*   Developed using boostrap-v4.0.0
*   angular-v7.0.2
*   angular/cli-v7.0.4
*   [ng-bootstrap-v4.0.0](https://github.com/ng-bootstrap/)
*   [ngx-translate-v11.0.0](https://github.com/ngx-translate)
*   Following the best practices.
*   Ahead-of-Time compilation support.
*   Official Angular i18n support.
*   Production and development builds.
*   Tree-Shaking production builds.

### How to start

**Note** that this seed project requires **node >=v8.9.0 and npm >=4**.

In order to start the project use:

```bash
$ git clone https://github.com/start-angular/SB-Admin-BS4-Angular-6.git
$ cd SB-Admin-BS4-Angular-6
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
