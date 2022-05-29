const Term = require('../models/Term');

// @desc Get all terms(items)
// @route GET /api/v1/terms
// @access Public

exports.getTerms = async (req, res) => {
  try {
    const terms = await Term.find();
    return res.status(200).json({
      success: true,
      count: terms.length,
      data: terms
    })
  } catch (err) {
    if (err.name === 'ValidationError') {

      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    else {
      return res.status(500).json({
        success: false,
        error: "Server error"
      });
    }
  }
}


// @desc   Post single term
// @route  POST /api/v1/terms
// @access Public

exports.addTerm = async (req, res) => {
    try {
      const { definition, abbreviation } = req.body;
      
      //Term.findOne({ abbreviation }).then(abbr => {
     //  if (abbr) return res.status(400).json({ msg: 'Term already exists'})});

       const test =  await Term.findOne({ abbreviation }); 

       if(test){
         return res.status(400).json({ msg: 'Term already exists'})
       } else {
        const term = await Term.create(req.body);

      return res.status(201).json({
        success: true,
        data: term
      })
    
       }

    } catch (error) {
      console.log(error);
    }
  }

  // @desc   Edit Term
// @route  PUT /api/v1/terms:id
// @access Public (auth has not been implemented yet)           

exports.editTerm = async (req, res) => {
  try {
    const { abbreviation, definition } = req.body;
    const term = await Term.findByIdAndUpdate(req.params.id, req.body);
    if (!term) {
      return res.status(404).json({
        success: false,
        error: 'Term was not found'
      })
    }

    return res.status(201).json({
      success: true,
      data: req.body
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error!'
    });
  }
}



// @desc   Get single term
// @route  GET /api/v1/terms/:id
// @access Public

  exports.getSingleTerm = async (req, res) => {
    try {
      let singleTerm = await Term.findById(req.params.id).select(["-_id","-__v"]);
      return res.status(200).json({
        success: true,
        count: singleTerm.length,
        data: singleTerm
      })
    } catch (err) {
      if (err.name === 'ValidationError') {
  
        const messages = Object.values(err.errors).map(val => val.message);
  
        return res.status(400).json({
          success: false,
          error: messages
        });
      }
      else {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      }
    }
  }




//@desc Search for a specific Term
// GET /api/v1/api/term/termSearch
// Search for a specific Term model

exports.searchTerm = async (req, res) => {
    try {
      const search = req.params.abbreviation;

      var regex = new RegExp([search, "*"].join(""), "i");
      const term = await Term.findOne({ abbreviation: regex });


      return res.status(200).json({
        success: true,
        count: term.length,
        data: term
      })
    } catch (err) {
      if (err.name === 'ValidationError') {
  
        const messages = Object.values(err.errors).map(val => val.message);
  
        return res.status(400).json({
          success: false,
          error: messages
        });
      }
      else {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      }
    }
  }