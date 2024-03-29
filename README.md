# DITA CSS Documentation Projects

This repo contains documentation related to writing Cascading Style Sheets (CSS). It is writen in DITA (Darwin Information Type Architecture). It serves as an example repo for the Reusable Content project in the University of Minnesota-Twin Cities course: [Writing with Digital Technologies](http://4662wf15.clindgrencv.com/) (WRIT 4662w).

## Projects

This topic model's scope includes documentation related to CSS. This <code>css-projects</code> directory is conceptually the parent directory for the larger scope of what would conceivably be a comprehensive corpus of CSS-related documentation. Currently, the architecture includes a child directory, <code>grid</code>, that includes documentation related to developing various grids: <code>css3-grid-module</code>, <code>float-grid</code>, and <code>purecss-grid</code>.

By creating the DITA topics &ndash; tasks, concepts, and references &ndash; within this greater architecture, it provides the writer the opportunity to consider what topics might be best placed within shared-assets or shared-topics to be re-used in other topics across the entire scope of the model. For example, the <code>shared-topics/t_clearfix.dita</code> task topic can be used in multiple writing situations, so it makes sense to put it in a shared directory to be referenced by numerous <code>.ditamaps</code> for best re-use cases.

## Directory Structure

<pre>
css-projects/
  float_grids.ditamap
  understanding_css_grids.ditamap
  ...

  grids/
    bootstrap3-grid/
      ... 
    css3-grid-module/
      ...
    flexbox-grid/
      ...

    float-grid/
      topics/
        c_float_grid_overview.dita
        t_coding_grid.dita
      README.md

    purecss-grid/
      ...

    shared-assets/
    shared-topics/
    templates/

  shared-assets/
    web-css-grids.css
  shared-topics/
    c_css_declr_clear.dita
    c_css_float_positioning_scheme.dita
    c_css_pseudo_elem_after.dita
    c_css_val_both.dita
    t_clearfix.dita

</pre>

## Building DITA Transformations

See the DITA-OT user guide about how to generate output: [http://www.dita-ot.org/2.1/getting-started/using-dita-command.html](http://www.dita-ot.org/2.1/getting-started/using-dita-command.html)

### Sample DITA Commands

**Command for <code>dita</code> command help**:

<pre>
username@computername:~/dita-ot-2.1.1$ dita --help
</pre>

<pre>
/* DITA options and arguments */

-f == dita output format
-i == dita input map file
-o == dita output directory
-D&lt;property&gt;=&lt;value&gt; == add custom args 
    with particular values to dita transformation
-filter &lt;file&gt; == filter and flagging file
</pre>

**Create an HTML5 site**:

<pre>
username@computername:~/dita-ot-2.1.1$ dita -f html5 -i 'projects/css-projects/understanding_css.ditamap' \
  -o 'projects/css-projects/out/html5/ex-understanding-css' \
</pre>

**Create an HTML5 site with a custom CSS file**:

<pre>
username@computername:~/dita-ot-2.1.1$ dita -f html5 -i 'projects/css-projects/understanding_css.ditamap' \
  -o 'projects/css-projects/out/html5/ex-understanding-css' \
  -Dargs.cssroot='projects/css-projects/shared-assets' \
  -Dargs.css='${cssroot}/web-css-grids.css' \
  -Dargs.csspath='css' \
  -Dargs.copycss='yes'
</pre>

**Create a PDF**:

<pre>
username@computername:~/dita-ot-2.1.1$ dita -f pdf -i 'projects/css-projects/understanding_css.ditamap' \
  -o 'projects/css-projects/out/html5/ex-understanding-css' \
</pre>
