
      var tree;
      
      function treeInit() {
      tree = new YAHOO.widget.TreeView("treeDiv1");
      var root = tree.getRoot();
    

  

  var d4e10 = new YAHOO.widget.TextNode("Understanding CSS Grids", root, false);var d4e14 = new YAHOO.widget.TextNode("CSS Grid Tutorials", d4e10, false);var d4e18 = new YAHOO.widget.TextNode("Creating a float-based, responsive grid", d4e14, false);var objd4e22 = { label: "Coding a float-based grid in CSS", href:"grids/float-grid/topics/c_float_grid_overview.html", target:"contentwin" };
    var d4e22 = new YAHOO.widget.TextNode(objd4e22, d4e18, false);var objd4e32 = { label: "How to code a float-based, responsive grid", href:"grids/float-grid/topics/t_coding_grid.html", target:"contentwin" };
    var d4e32 = new YAHOO.widget.TextNode(objd4e32, d4e22, false);var d4e39 = new YAHOO.widget.TextNode("Common CSS Grid Properties", d4e10, false);var d4e43 = new YAHOO.widget.TextNode("Float positioning", d4e39, false);var objd4e47 = { label: "CSS float positioning scheme", href:"shared-topics/c_css_float_positioning_scheme.html", target:"contentwin" };
    var d4e47 = new YAHOO.widget.TextNode(objd4e47, d4e43, false);var objd4e57 = { label: "The 'clear' property: How to position boxes next to floats", href:"shared-topics/c_css_declr_clear.html", target:"contentwin" };
    var d4e57 = new YAHOO.widget.TextNode(objd4e57, d4e47, false);var objd4e67 = { label: "CSS clear: both declaration", href:"shared-topics/c_css_val_both.html", target:"contentwin" };
    var d4e67 = new YAHOO.widget.TextNode(objd4e67, d4e57, false);var objd4e77 = { label: "Clear-fix hack", href:"shared-topics/t_clearfix.html", target:"contentwin" };
    var d4e77 = new YAHOO.widget.TextNode(objd4e77, d4e57, false);


      tree.draw(); 
      } 
      
      YAHOO.util.Event.addListener(window, "load", treeInit); 
    