const validate = (schema) => async (req, res, next) => {
  try {
    const validatedBody = await schema.parseAsync(req.body);
    req.body = validatedBody;
    next();
  } catch (error) {
    const formattedErrors = error.errors.map((validationError) => ({
      field: validationError.path.join("."),
      message: validationError.message,
    }));

    res
      .status(400)
      .json({ error: "Validation Error", details: formattedErrors });
  }
};

module.exports = validate;
