import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div class="page-title">
        <div class="breadcrumb-env">
          <ul class="user-info-menu left-links list-inline list-unstyled">
            <li class="hidden-sm hidden-xs">
              <a href="#" data-toggle="sidebar">
                <i class="fa-bars"></i>
              </a>
            </li>
          </ul>
          <ol class="breadcrumb bc-1">
            <li>
              <a href="">
                <i class="fa-home"></i>
              </a>
            </li>
            <li class="active">
              <strong></strong>
            </li>
          </ol>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <div class="alert alert-danger"></div>
          </div>
          <form action="">
            <div class="tabs-vertical-env">
              <ul class="nav tabs-vertical">
                <li class="active">
                  <a href="#v-about" data-toggle="tab">
                    <i class="fa fa-user"></i>
                  </a>
                </li>
                <li>
                  <a href="#v-contact" data-toggle="tab">
                    <i class="fa fa-phone"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#v-statics" data-toggle="tab">
                    <i class="fa fa-line-chart"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#v-social" data-toggle="tab">
                    <i class="fa fa-share-alt"></i>{" "}
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane active" id="v-about">
                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1"></label>
                    <div class="col-sm-10">
                      {/* <!-- kicu hobe akta akhnea --> */}
                    </div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label"></label>
                    <div class="col-sm-8">
                      <input type="file" class="form-control" name="avatar" />
                    </div>
                    <div class="col-sm-2">
                      <img src="" class="img-inline userpic-32" width="40" />
                    </div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1">
                      {" "}
                    </label>
                    <div class="col-sm-10">{/* <!-- php file cilo --> */}</div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1"></label>
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        name="about[about_me]"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1"></label>
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        name="about[position_typing]"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1">
                      {" "}
                    </label>
                    <div class="col-sm-10">{/* <!-- ?? --> */}</div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1">
                      {/* <!--  --> */}
                    </label>
                    <div class="col-sm-7">
                      <input type="file" class="form-control" name="resume" />
                    </div>
                    <div class="col-sm-3">
                      <a href="#" download target="_blank">
                        <i class="fa fa-download"></i>{" "}
                      </a>
                    </div>
                  </div>
                  <div class="form-group-separator"></div>
                </div>

                <div class="tab-pane" id="v-contact">
                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1">
                      {" "}
                    </label>
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        name="about[address]"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1"></label>
                    <div class="col-sm-5"></div>
                    <div class="col-sm-5"></div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1">
                      {" "}
                    </label>
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        name="about[phone]"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1">
                      {" "}
                    </label>
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        name="about[email]"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group-separator"></div>
                </div>
                <div class="tab-pane" id="v-statics">
                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1">
                      {" "}
                    </label>
                    <div class="col-sm-10"></div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1">
                      {" "}
                    </label>
                    <div class="col-sm-10"></div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="field-1"></label>
                    <div class="col-sm-10"></div>
                  </div>
                  <div class="form-group-separator"></div>

                  <div class="form-group">
                    <div class="col-sm-10"></div>
                    <div class="form-group-separator"></div>
                  </div>
                  <div class="tab-pane" id="v-social">
                    <div class="form-group">
                      <label class="col-sm-2 control-label" for="field-1">
                        {" "}
                      </label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label class="col-sm-2 control-label" for="field-1">
                        {" "}
                      </label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label class="col-sm-2 control-label" for="field-1">
                        {" "}
                      </label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label class="col-sm-2 control-label" for="field-1">
                        {" "}
                      </label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label class="col-sm-2 control-label" for="field-1">
                        {" "}
                      </label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label
                        class="col-sm-2 control-label"
                        for="field-1"
                      ></label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>

                    <div class="form-group">
                      <label class="col-sm-2 control-label" for="field-1">
                        {" "}
                      </label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label" for="field-1">
                        {" "}
                      </label>
                      <div class="col-sm-10"></div>
                    </div>
                    <div class="form-group-separator"></div>
                  </div>

                  <div class="form-group">
                    <label class="col-sm-2 control-label"></label>
                    <div class="col-sm-10">
                      <input
                        type="submit"
                        class="btn btn-secondary "
                        name="submit"
                        value="<"
                      />
                      <a href="" class="btn btn-danger"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
