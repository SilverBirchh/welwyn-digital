import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
  borderColor: "#6dd2da",
};

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
              focusBorderColor: "#6dd2da",
            },
          },
        },
      },
    },
  },
});

export default theme;
