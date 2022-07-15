import { gql } from "@apollo/client";

export const DELETE_ARCHITECT = gql`
  mutation DELETE_ARCH($id: Int!) {
    deleteArchitectProfile(id: $id) {
      id
    }
  }
`;

export const CREATE_ARCHITECTPROFILE = gql`
  mutation CREATE_ARCHITECTPROFILE(
    $firstName: String!
    $lastName: String!
    $email: String!
    $mobile: String!
    $description: String
    $category: String
    $profileImage: String
    $resumeUrl: String
    $projectTitle: String
    $projectImage: String
    $charge: String
  ) {
    createArchitectProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      mobile: $mobile
      description: $description
      category: $category
      profileImage: $profileImage
      resumeUrl: $resumeUrl
      projectTitle: $projectTitle
      projectImage: $projectImage
      charge: $charge
    ) {
      id
      firstName
      lastName
      email
      mobile
      category
      profileImage
      resumeUrl
      projectTitle
      projectImage
      aboutMe
      reviews {
        id
        profileId
        authorId
        text
        status
        likes
      }
      charge
      createdAt
      updatedAt
      isDeleted
    }
  }
`;

export const UPDATE_ARCHITECTPROFILE = gql`
  mutation UPDATE_ARCHITECTPROFILE(
    $firstName: String
    $lastName: String
    $mobile: String
    $email: String!
    $profileImage: String
    $resumeUrl: String
    $projectTitle: String
    $projectImage: String
    $aboutMe: String
    $charge: String
    $isDeleted: Boolean
  ) {
    updateArchitectProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      mobile: $mobile
      profileImage: $profileImage
      resumeUrl: $resumeUrl
      projectTitle: $projectTitle
      projectImage: $projectImage
      charge: $charge
      aboutMe: $aboutMe
      isDeleted: $isDeleted
    ) {
      id
      firstName
      lastName
      email
      mobile
      category
      profileImage
      resumeUrl
      projectTitle
      projectImage
      aboutMe
      projects {
        title
        imageUrl
      }
      reviews {
        id
        profileId
        authorId
        text
        status
        likes
      }
      charge
      createdAt
      updatedAt
      isDeleted
    }
  }
`;
