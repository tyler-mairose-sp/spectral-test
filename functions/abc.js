module.exports = targetVal => {
    if (targetVal !== "hello") {
      return [
        {
          message: 'Value must equal "hello".',
        },
      ];
    }
  };