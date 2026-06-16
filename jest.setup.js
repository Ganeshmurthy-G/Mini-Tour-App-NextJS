import "@testing-library/jest-dom";

// Set environment variables for testing
process.env.NEXT_PUBLIC_APP_NAME = "Mini Tourist App";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    const { fill, priority, ...rest } = props;
    return <img {...rest} alt={props.alt} />;
  },
}));