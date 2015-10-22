# DITA CSS Documentation Projects

This repo contains documentation related to writing Cascading Style Sheets (CSS). It is writen in DITA (Darwin Information Type Architecture). It serves as an example repo for the Reusable Content project in the University of Minnesota-Twin Cities course: [Writing with Digital Technologies](http://4662wf15.clindgrencv.com/) (WRIT 4662w).

## Projects

This topic model's scope includes documentation related to CSS. Currently, the architecture includes a child directory, <code>grid</code>, that includes documentation related to developing various grids: <code>css3-grid-module</code>, <code>float-grid</code>, and <code>purecss-grid</code>.

By creating the DITA topics &ndash; tasks, concepts, and references &ndash; within this greater architecture, it provides the writer the opportunity to consider what topics might be best placed within shared-assets or shared-topics to be re-used in other topics. For example, the <code>shared-topics/t_clearfix.dita</code> task topic can be used in multiple writing situations, so it makes sense to put it in a shared directory to be referenced by numerous maps.

## Directory Structure

<pre>
  css-projects/
  README.md
  understanding_css.ditamap

  grids/
    /*Don't worry about this ant-scripts stuff*/
    ant-scripts/
      ant_grid_web_css.xml

    css3-grid-module/

    float-grid/
      topics/
        c_float_grid_overview.dita
        t_coding_grid.dita
      web-tut-example/
      web-tut-float-grid/
      README.md
      pdf_tutorial.ditamap
      web_grid_conceptual.ditamap
      web_tutorial.ditamap

    purecss-grid/
    shared-assets/
    shared-topics/
    templates/
    README.md

  shared-assets/
  shared-topics/
    c_css_declr_clear.dita
    c_css_float_positioning_scheme.dita
    c_css_pseudo_elem_after.dita
    c_css_val_both.dita
    t_clearfix.dita
</pre>

## Sample DITA Commands

**Create an HTML5 site with a custom CSS file**:

<pre>
:~/dita-ot-2.1.1$ dita -f html5 -i 'projects/css-projects/understanding_css.ditamap' \
  -o 'projects/css-projects/ex-understanding-css' \
  -Dargs.cssroot='projects/css-projects/shared-assets' \
  -Dargs.css='${cssroot}/web-css-grids.css' \
  -Dargs.csspath='css' \
  -Dargs.copycss='yes'
</pre>