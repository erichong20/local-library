var Author = require("../models/author");

//Display list of all authors
exports.author_list = function(req,res){
  res.send("Not implemented: Author list");
}

//Detail page for specific author
exports.author_detail = function(req,res){
  res.send("Not implemented: Author detail");
}

//Author create form with GET
exports.author_create_get = function(req,res){
  res.send("Not implemented: Author create GET");
}

//Handle author creation with POST
exports.author_create_post = function(req, res){
  res.send("Not implemented: Author create POST");
}

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update POST');
};