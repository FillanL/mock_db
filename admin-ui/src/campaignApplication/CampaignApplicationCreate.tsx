import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CampaignTitle } from "../campaign/CampaignTitle";

export const CampaignApplicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="campaign.id"
          reference="Campaign"
          label="campaign"
        >
          <SelectInput optionText={CampaignTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
