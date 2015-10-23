# DITA CSS Documentation Projects

This repo contains documentation related to writing Cascading Style Sheets (CSS). It is writen in DITA (Darwin Information Type Architecture). It serves as an example repo for the Reusable Content project in the University of Minnesota-Twin Cities course: [Writing with Digital Technologies](http://4662wf15.clindgrencv.com/) (WRIT 4662w).

## Projects

This topic model's scope includes documentation related to CSS. This <code>css-projects</code> directory is conceptually the parent directory for the larger scope of what would conceivably be a comprehensive corpus of CSS-related documentation. Currently, the architecture includes a child directory, <code>grid</code>, that includes documentation related to developing various grids: <code>css3-grid-module</code>, <code>float-grid</code>, and <code>purecss-grid</code>.

By creating the DITA topics &ndash; tasks, concepts, and references &ndash; within this greater architecture, it provides the writer the opportunity to consider what topics might be best placed within shared-assets or shared-topics to be re-used in other topics across the entire scope of the model. For example, the <code>shared-topics/t_clearfix.dita</code> task topic can be used in multiple writing situations, so it makes sense to put it in a shared directory to be referenced by numerous <code>.ditamaps</code> for best re-use cases.

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

## DITA-OT Installation

Before using the DITA-OT, be sure to properly set it up on your computer: [http://www.dita-ot.org/2.1/getting-started/index.html](http://www.dita-ot.org/2.1/getting-started/index.html). You will need JAVA JRE or JDK (version 7+) on your computer prior to setting up the ToolKit.

###Java Installation

Verify that the environment variable JAVA_HOME has been set.

<pre>
set JAVA_HOME=&lt;JRE_dir&gt;
</pre>

###OT Installation on Windows

The following steps guide you to set up the DITA Open Toolkit processing environment.

1. Download the DITA Open Toolkit package: [https://github.com/dita-ot/dita-ot/releases/tag/2.1.1](https://github.com/dita-ot/dita-ot/releases/tag/2.1.1).

2. Unzip the package file into the installation directory of your choice. For example <code>C:&#92;pkg&#92;dita-ot-2.1.1</code>

3. Set up DITA_HOME environment variable to point to DITA-OT installation directory: <code>set DITA_HOME=&lt;DITA-OT_dir&gt;</code>

4. Test the DITA-OT installation with the demo conversions.

###OT Installation on Linux or OS X

The following steps guide you to set up the DITA Open Toolkit processing environment in Linux or OS X.

1. Download the DITA Open Toolkit package: [https://github.com/dita-ot/dita-ot/releases/tag/2.1.1](https://github.com/dita-ot/dita-ot/releases/tag/2.1.1).

2. Extract the package file into a installation directory of your choice. For example, your in your home folder: <code>home/dita-ot-2.1.1</code>, or if you are on a Mac, perhaps your Apps folder.

3. Verify that the environment variable JAVA_HOME has been set: <code>export JAVA_HOME=&lt;JRE_dir&gt;</code>

4. Set up DITA_HOME environment variable to point to DITA-OT installation directory: <code>export DITA_HOME=&lt;DITA-OT_dir&gt;</code>

5. To use the <code>dita</code> command anywhere, set up your environment variable: <code>export $PATH='$DITA_HOME/dita-ot-2.1.1/bin'</code>

6. Test the DITA-OT installation with the demo conversions.


## Sample DITA Commands

**Command for <code>dita</code> command help**:

<pre>
:~/dita-ot-2.1.1$ dita --help
</pre>

**Create an HTML5 site**:

<pre>
:~/dita-ot-2.1.1$ dita -f html5 -i 'projects/css-projects/understanding_css.ditamap' \
  -o 'projects/css-projects/ex-understanding-css' \
</pre>

**Create an HTML5 site with a custom CSS file**:

<pre>
:~/dita-ot-2.1.1$ dita -f html5 -i 'projects/css-projects/understanding_css.ditamap' \
  -o 'projects/css-projects/ex-understanding-css' \
  -Dargs.cssroot='projects/css-projects/shared-assets' \
  -Dargs.css='${cssroot}/web-css-grids.css' \
  -Dargs.csspath='css' \
  -Dargs.copycss='yes'
</pre>
