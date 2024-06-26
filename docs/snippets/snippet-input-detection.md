---
title: InputDetection
---

Checks if a button is pressed

## Example

```lua
local player = CL.InteractCharacter.PlayerInstance
if player == nil then
    return
end

local leftHand = player.hands[1]
local rightHand = player.hands[0]

local xButton = leftHand.inputs[CL.VRTKInputButton.ButtonType.ButtonOne]
local yButton = leftHand.inputs[CL.VRTKInputButton.ButtonType.ButtonTwo]
local aButton = rightHand.inputs[CL.VRTKInputButton.ButtonType.ButtonOne]
local bButton = rightHand.inputs[CL.VRTKInputButton.ButtonType.ButtonTwo]

if xButton.IsPressed then
    print("you pressed the X button")
end

if yButton.IsPressed then
    print("you pressed the Y button")
end

if aButton.IsPressed then
    print("you pressed the A button")
end

if bButton.IsPressed then
    print("you pressed the B button")
end
```

## User Variables

No user variables.

## FAQ

### Do you have an example on how you would use this in a script?
Sure. Here is a script which you can call in an `InteractTriggerX`.
```lua
function table = {}

function table:OnGrab(a, g)
  self.hand = a.attachedHand
  self:ListenForButtonInput()
end

function table:ListenForButtonInput()
    local detectButtonInput = function(sche, t, s)
        if IsNullOrDestroyed(self.trans) then
            sche:Stop()
            CL.Scheduler.RemoveSchedule(self.ButtonSchedId) 
            return
        end

         -- gets the a/x button of respective hand
        local buttonIsPressed = self.hand.inputs[CL.VRTKInputButton.ButtonType.ButtonOne].IsPressed
        
        if self.isPress and not buttonIsPressed then
            self.isPress = false

            print("buttonReleased")
        end
        if not self.isPress and buttonIsPressed then
            self.isPress = true
          
            print("buttonPressed")
        end
    end

    self.ButtonSchedId = CL.Scheduler.Create(self.trans, detectButtonInput ,0, -1).actionId
end

return Class(nil,nil,table)
```

### Any other functions I can use with buttons?

Yes! you can also check if it's being touched, heldDown, and more! Check [here](https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_v_r_t_k_input_button.html)
