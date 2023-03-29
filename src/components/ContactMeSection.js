import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      submit('https://example.com/contactme', values)
    },
    validationSchema:
      Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        type: Yup.string().required("Required"),
        comment: Yup.string().required("Required"),
      }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if(response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);



  const firstNameProps = formik.getFieldProps("firstName");
  const emailProps = formik.getFieldProps("email");
  const typeProps = formik.getFieldProps("type");
  const commentProps = formik.getFieldProps("comment");


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>) : null}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type} {...typeProps}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                  {...formik.getFieldProps('comment')}
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>) : null}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" disabled={isLoading || !formik.isValid} isLoading={isLoading}>
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
