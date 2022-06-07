(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[9907],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return h},kt:function(){return m}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return r?o.createElement(d,i(i({ref:t},h),{},{components:r})):o.createElement(d,i({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},342:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var o=r(2122),a=r(9756),n=(r(7294),r(3905)),i={id:"troubleshooting",title:"Troubleshooting Jetstream"},s=void 0,l={unversionedId:"jetstream/troubleshooting",id:"jetstream/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Jetstream",description:"How can I see what Jetstream is doing?",source:"@site/docs/jetstream/troubleshooting.md",sourceDirName:"jetstream",slug:"/jetstream/troubleshooting",permalink:"/jetstream/troubleshooting",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting Jetstream"},sidebar:"sidebar",previous:{title:"Jetstream Architecture and Operations",permalink:"/jetstream/operations"},next:{title:"Bucketing",permalink:"/bucketing"}},c=[{value:"How can I see what Jetstream is doing?",id:"how-can-i-see-what-jetstream-is-doing",children:[]},{value:"How do I know if something went wrong?",id:"how-do-i-know-if-something-went-wrong",children:[]},{value:"Something went wrong, what do I do?",id:"something-went-wrong-what-do-i-do",children:[]},{value:"Some results appear to be missing",id:"some-results-appear-to-be-missing",children:[]},{value:"How do I debug operational or more complex errors?",id:"how-do-i-debug-operational-or-more-complex-errors",children:[]}],h={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"how-can-i-see-what-jetstream-is-doing"},"How can I see what Jetstream is doing?"),(0,n.kt)("p",null,"For checking on daily Jetstream runs, the ",(0,n.kt)("inlineCode",{parentName:"p"},"jetstream")," DAG can be viewed via the ",(0,n.kt)("a",{parentName:"p",href:"https://workflow.telemetry.mozilla.org/tree?dag_id=jetstream"},"Airflow Web UI"),". This show whether the run is still in progress or has completed."),(0,n.kt)("p",null,"For checking on reruns after a config change, the ",(0,n.kt)("a",{parentName:"p",href:"https://app.circleci.com/pipelines/github/mozilla/jetstream-config?branch=main"},"jetstream-config CI")," will show all active runs and indicate whether a rerun has been successful or if there have been any errors."),(0,n.kt)("p",null,"For viewing the Argo workflows Jetstream is running, connect to the Argo dashboard by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"gcloud container clusters get-credentials jetstream --zone us-central1-a --project moz-fx-data-experiments && kubectl port-forward --namespace argo $(kubectl get pod --namespace argo --selector='app=argo-server' --output jsonpath='{.items[0].metadata.name}') 8080:2746\n")),(0,n.kt)("p",null,"The dashboard can than be accessed via ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080"},"127.0.0.1:8080")," through the web browser and provides a detailed overview of past workflows, the statuses of each step in a workflow and container logs."),(0,n.kt)("h3",{id:"how-do-i-know-if-something-went-wrong"},"How do I know if something went wrong?"),(0,n.kt)("p",null,"Jetstream logs errors to the console and, optionally, to the ",(0,n.kt)("inlineCode",{parentName:"p"},"monitoring.logs")," BigQuery table. Logging to BigQuery is enabled by default when running Jetstream via Airflow, as it allows for better alerting and monitoring of errors. It is by default disabled for runs triggered via the jetstream-config CI."),(0,n.kt)("p",null,"Errors can be viewed on the ",(0,n.kt)("a",{parentName:"p",href:"https://mozilla.cloud.looker.com/dashboards/246"},"Jetstream error dashboard")," in Looker."),(0,n.kt)("p",null,"Additionally, alerts can be set up in Looker to check for errors daily and sent an email if failures have been detected. To subscribe to these alerts, go to the ",(0,n.kt)("a",{parentName:"p",href:"https://mozilla.cloud.looker.com/dashboards/246"},"Jetstream error dashboard"),", click on the ",(0,n.kt)("em",{parentName:"p"},"Alerts")," (bell) icon on the ",(0,n.kt)("em",{parentName:"p"},"Critical Errors Last Run"),' tiles and follow the "Error Count" alert.'),(0,n.kt)("h3",{id:"something-went-wrong-what-do-i-do"},"Something went wrong, what do I do?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check the ",(0,n.kt)("a",{parentName:"li",href:"https://mozilla.cloud.looker.com/dashboards/246"},"Jetstream error dashboard")," for more details on the error that occurred."),(0,n.kt)("li",{parentName:"ol"},"If the experiment uses a custom configuration, make sure the configuration is valid. Sometimes, SQL written for specifying metrics in the configuration file can contain logical errors that result in failures when computing statistics.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It is possible that SQL that was once valid starts to fail, because the query has become too complex. This can happen if new fields get added to a table that is being queried. In these cases, try to rewrite and simplify the SQL query or consider using source tables instead of derived views. ")))),(0,n.kt)("p",null,"If you are unsure of what might have gone wrong or what to, you can open ",(0,n.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/projects/CIRRUS/issues/CIRRUS-68?filter=allopenissues"},"an issue in Jira")," or ask for help in the ",(0,n.kt)("a",{parentName:"p",href:"https://mozilla.slack.com/archives/CF94YGE03"},"#ask-experimenter")," Slack channel."),(0,n.kt)("h3",{id:"some-results-appear-to-be-missing"},"Some results appear to be missing"),(0,n.kt)("p",null,"It can take up to 2 days for results of the overall time period to be available after an experiment ends. For example, if an experiment ends on 2021-04-05, then results for the overall time period will be computed in the next daily analysis run on 2021-04-06. As running the analysis can take a few hours to complete results will be available on 2021-04-07."),(0,n.kt)("p",null,"If results other than for the overall period are missing or more than 2 days have passed and no overall results are available, check the ",(0,n.kt)("a",{parentName:"p",href:"https://mozilla.cloud.looker.com/dashboards/246"},"Jetstream error dashboard")," if there are any analysis errors for your experiment."),(0,n.kt)("p",null,"If there have been no errors, or the errors cannot be resolved, open ",(0,n.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/projects/CIRRUS/issues/CIRRUS-68?filter=allopenissues"},"an issue in Jira")," or ask for help in the ",(0,n.kt)("a",{parentName:"p",href:"https://mozilla.slack.com/archives/CF94YGE03"},"#ask-experimenter")," Slack channel."),(0,n.kt)("h3",{id:"how-do-i-debug-operational-or-more-complex-errors"},"How do I debug operational or more complex errors?"),(0,n.kt)("p",null,"Debugging operational or more complex errors is usually done by Jetstream engineers."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check the ",(0,n.kt)("a",{parentName:"li",href:"https://mozilla.cloud.looker.com/dashboards/246"},"Jetstream error dashboard")," for more details on the error that occurred."),(0,n.kt)("li",{parentName:"ol"},"To get more detailed logs or view each individual workflow step, connect to the Argo dashboard and navigate to the workflow where errors might have occurred."),(0,n.kt)("li",{parentName:"ol"},"Once errors have been resolved, to rerun affected experiments for the date when they failed make sure to install the Jetstream CLI locally and execute: ",(0,n.kt)("inlineCode",{parentName:"li"},"jetstream run-argo --date=2021-04-26 --experiment_slug=bug-1695015-pref-new-tab-modernized-ux-region-1-release-86-88"),". For example: ",(0,n.kt)("inlineCode",{parentName:"li"},"jetstream run-argo --date=2021-04-26 --experiment_slug=bug-1695015-pref-new-tab-modernized-ux-region-1-release-86-88"))),(0,n.kt)("p",null,"The logs can indicate a couple of different problems:"),(0,n.kt)("h4",{id:"there-has-been-a-operational-error-related-to-kubernetes"},"There has been a operational error related to Kubernetes"),(0,n.kt)("p",null,"This could happen, for example, if available memory or CPUs have been exceeded. To get more information about the pods that failed, navigate to the ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/kubernetes/workload?project=moz-fx-data-experiments&pageState=(%22savedViews%22:(%22i%22:%22bf4f1f5805924fe2ba1cd23bd3b0ef8b%22,%22c%22:%5B%22gke%2Fus-central1-a%2Fjetstream%22%5D,%22n%22:%5B%5D))"},(0,n.kt)("inlineCode",{parentName:"a"},"jetstream")," Kubernetes cluster in the GCP web console"),". The web UI allows to view the memory and CPU usage of specific pods or the entire cluster as well as pod logs. This information can help to decide whether the cluster needs to be resized. Resizing the cluster or allocating more resources is worth considering if these errors happen frequently. For occasional failures, simply rerunning the affected experiment is sufficient."),(0,n.kt)("h4",{id:"an-external-config-or-outcome-definition-is-causing-failures"},"An external config or outcome definition is causing failures"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ensure that the config is valid and that SQL does not contain any logical errors."),(0,n.kt)("li",{parentName:"ol"},"If the SQL has become too complex, try to simplify queries or use source tables instead of derived views."),(0,n.kt)("li",{parentName:"ol"},"Fix the configuration. Once the new config gets merge, the experiment will be rerun automatically.\n")),(0,n.kt)("h4",{id:"there-has-been-an-error-because-of-a-timeout-when-using-an-external-api"},"There has been an error because of a timeout when using an external API."),(0,n.kt)("p",null,"Timeouts occasionally happen when running queries in BigQuery, fetching experiments from the Experimenter API or fetching config files from GitHub. Jetstream implements a retry mechanism for most of these cases but it is possible that all of these retries fail. Rerunning affected experiments should in most cases resolve these issues. However, if this failures keep happening then this could indicate API changes."),(0,n.kt)("h4",{id:"there-is-a-bug-in-the-jetstream-code-base"},"There is a bug in the jetstream code base"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add a test case to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/jetstream"},"jetstream")," to reproduce the error."),(0,n.kt)("li",{parentName:"ol"},"Fix the bug and open a PR against the repository."),(0,n.kt)("li",{parentName:"ol"},"Once the fix has been approved, merged and deployed, the affected experiment can be rerun.")),(0,n.kt)("h4",{id:"airflow-returned-an-error-or-is-sending-notification-emails"},"Airflow returned an error or is sending notification emails"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check the Airflow logs"),(0,n.kt)("li",{parentName:"ol"},"Errors in Airflow can happen if there has been a problem with the Airflow cluster itself, e.g. the jetstream tasks could not be started. In this case, clearing the affected task to trigger a rerun should fix the issue. If problems persist, then reach out to data ops by ",(0,n.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/enter_bug.cgi?product=Data%20Platform%20and%20Tools"},"opening a Bugzilla ticket"),"."),(0,n.kt)("li",{parentName:"ol"},"Airflow failures can also occur if the analysis workflow could not be started. For example, if connecting to the Argo cluster failed. Check if the ",(0,n.kt)("inlineCode",{parentName:"li"},"jetstream")," cluster is in a healthy state and if the analysis run can be started using a locally installed Jetstream CLI."),(0,n.kt)("li",{parentName:"ol"},"The Jetstream DAG has some upstream dependencies that need to successfully complete in order for jetstream to run. If one of these upstream dependencies fails, then Airflow will keep sending email alerts with ",(0,n.kt)("inlineCode",{parentName:"li"},"up_for_retry")," in the subject. Failures in the upstream dependencies need to be resolved before jetstream can run. Check for the owner of the upstream task that failed and open a ",(0,n.kt)("a",{parentName:"li",href:"https://bugzilla.mozilla.org/enter_bug.cgi?product=Data%20Platform%20and%20Tools"},"Bugzilla ticket")," with the owner tagged.")))}u.isMDXComponent=!0}}]);