import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { Transition } from "../Transition";
import DialogContent from "@material-ui/core/DialogContent";
import Stack from "@material-ui/core/Stack";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import MobileDateTimePicker from "@material-ui/lab/MobileDateTimePicker";
import { TextField, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/core/Autocomplete";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedRoundedIcon from "@material-ui/icons/RadioButtonCheckedRounded";
import EventAvailableRoundedIcon from "@material-ui/icons/EventAvailableRounded";
// import { makeStyles } from "@material-ui/styles";

import { SimpleInput } from "../Inputs/SimpleInput";
import { AvatarImage } from "../AvatarImage";
import catImage from "../../public/images/cat.jpg";

const icon = <RadioButtonUncheckedIcon fontSize="small" color="primary" />;
const checkedIcon = (
  <RadioButtonCheckedRoundedIcon fontSize="small" color="primary" />
);

// const useStyles = makeStyles({
//   underline: {
//     "&&&:before": {
//       borderBottom: "none",
//     },
//     "&&:after": {
//       borderBottom: "none",
//     },
//   },
//   placeholder: {
//     "&::placeholder": {
//       textOverflow: "ellipsis !important",
//       color: "blue",
//       fontSize: 14,
//     },
//   },
// });

interface ScheduleRoomProps {
  openScheduleRoom: boolean;
  handleCloseScheduleRoom: () => void;
}

export const ScheduleRoomCard: React.FC<ScheduleRoomProps> = ({
  openScheduleRoom,
  handleCloseScheduleRoom,
}) => {
  const [timeDate, setTimeDate] = useState<Date | null>(
    new Date("2018-01-01T00:00:00.000Z")
  );
  // const classes = useStyles();

  return (
    <Dialog
      open={openScheduleRoom}
      disableEscapeKeyDown
      TransitionComponent={Transition}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "0.75rem",
        },
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          maxWidth: 500,
          backgroundColor: "background.paper",
        }}
      >
        {/* Header */}
        <Grid item xs={12}>
          <DialogContent
            sx={{
              textAlign: "right",
              paddingBottom: 0,
              paddingTop: ".5rem",
            }}
          >
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <IconButton onClick={handleCloseScheduleRoom}>
                <CloseIcon color="primary" />
              </IconButton>
              <Typography sx={{ textAlign: "center" }}>New Event</Typography>
              <IconButton onClick={handleCloseScheduleRoom}>
                <EventAvailableRoundedIcon color="primary" />
              </IconButton>
            </Stack>
          </DialogContent>
        </Grid>

        {/* Body */}
        {/* Body Part One */}
        <Grid item xs={12}>
          <List>
            <ListItem>
              <SimpleInput size="small" placeholder="Event Name" fullWidth />
            </ListItem>

            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <Typography>With</Typography>
                <ListItemIcon sx={{ padding: "0 0.5rem" }}>
                  <AvatarImage link="/" image={catImage} />
                </ListItemIcon>
                <Typography>Prashant Kumar</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <Autocomplete
                multiple
                fullWidth
                size="small"
                limitTags={2}
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option: any) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    placeholder="Add a Co-host or Guest"
                  />
                )}
              />
            </ListItem>
          </List>
        </Grid>

        {/* Body Part Two */}
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ListItem>
              <MobileDateTimePicker
                value={timeDate}
                onChange={(newValue) => {
                  setTimeDate(newValue);
                }}
                renderInput={(params) => (
                  //@ts-ignore
                  <SimpleInput {...params} />
                )}
                onError={console.log}
                minDate={new Date()}
              />
            </ListItem>
          </LocalizationProvider>
        </Grid>

        {/* Body Part Three */}
        <Grid item xs={12}>
          <ListItem>
            <SimpleInput
              multiline
              minRows={5}
              maxRows={5}
              size="small"
              placeholder="Description"
              fullWidth
            />
          </ListItem>
        </Grid>
      </Grid>
    </Dialog>
  );
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];
