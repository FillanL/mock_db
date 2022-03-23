import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CampaignTitle } from "../campaign/CampaignTitle";

export const CampaignApplicationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="campaign.id"
          reference="Campaign"
          label="campaign"
        >
          <SelectInput optionText={CampaignTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
