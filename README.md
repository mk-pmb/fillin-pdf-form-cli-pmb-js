
<!--#echo json="package.json" key="name" underline="=" -->
pdffiller-cli-pmb
=================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
A simple CLI to fill in data into PDF forms.
<!--/#echo -->

Originally this project used
[`pdffiller`](https://www.npmjs.com/package/pdffiller), which uses `pdftk`.
When I switched from dummies to a real world PDF form, `pdftk` failed with
`Unhandled Java Exception: java.lang.NullPointerException`, so now I use
[`pdf-forms`](https://www.npmjs.com/package/pdf-forms) instead.



Usage
-----

### pdffiller-cli-pmb empty.pdf

Scan `empty.pdf` for form fields and print them as a JSON object.

### pdffiller-cli-pmb empty.pdf values.ceson

Read form data from `values.ceson` (you may also use JSON or YAML files)
and fill the form from `empty.pdf` with those values.

Prints the resulting raw PDF, so if in doubt, treat the output as binary data.






<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
