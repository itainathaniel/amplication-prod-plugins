import { blueprintPluginEventsParams as blueprint, blueprintPluginEventsTypes, blueprintTypes } from "@amplication/code-gen-types";
declare class BlueprintPluginTemplatePlugin implements blueprintTypes.AmplicationPlugin {
    register(): blueprintPluginEventsTypes.BlueprintEvents;
    beforeCreateBlueprint(context: blueprintTypes.DsgContext, eventParams: blueprint.CreateBlueprintParams): Promise<blueprint.CreateBlueprintParams>;
}
export default BlueprintPluginTemplatePlugin;
