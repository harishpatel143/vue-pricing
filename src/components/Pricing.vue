<template>
    <div>
        <div class="clearfix"> </div>
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-7">
                            <h2 class="page-title"> Pricing
                                <small>Simple Pricing Calculator</small>
                            </h2>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                    <form method="post" accept-charset="utf-8" id="pricing-form" action="/pricing"><div style="display:none;"><input type="hidden" name="_method" value="POST"></div>
                        <div class="col-md-1"></div>
                        <div class="col-md-7">
                            <div class="portlet solid blue" style="border-radius: 5px !important;">
                                <div class="portlet-title" style="text-align: center; margin-bottom: 30px;">
                                    <h3 class="h3-title"><span class="price-intervals"> Monthly </span> Pricing Calculator {{ no_of_employee }}</h3>
                                </div>
                                <div class="portlet-body form" style="height:480px">
                                    <div class="row">
                                        <div class="col-md-1"></div>
                                        <div class="form-group col-md-10 err-alert"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1"></div>
                                        <div class="form-group col-md-10">
                                            <span class="control-label col-md-8" style="font-size: 17px; line-height: 2;">How many employee do you want to add?</span>
                                            <div class="col-md-4" style="margin-top: 5px;">
                                                <input type="number" name="no_of_emp" class="form-control emp-strength" v-on:keyup="getEmpNum" placeholder="Enter # of employees">
                                                <span class="help-block"> </span>
                                            </div>
                                        </div>
                                        <div class="col-md-1"></div>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-1"></div>
                                        <div class="form-group col-md-10">
                                            <div class="info_alert"></div>
                                            <table class="table pricing-tbl">
                                                <thead>
                                                    <tr>
                                                        <th> Employees </th>
                                                        <th> Price Per Employee </th>
                                                        <th> <span class="priceDisplay" style="display: none;"> Total Price </span> </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr  v-for="(row, index) in rows">
                                                        <td>{{row.range}}</td>
                                                        <td> {{ row.price_per_emp | currency }}</td>
                                                        <td><span class="priceDisplay"> {{ row.rangeTotal }}</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1"></div>
                                        <div class="discount col-md-10" style="display:none;">
                                        </div>
                                        <div class="col-md-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1"></div>
                                        <div class="total-price-div col-md-10" style="display:none;"></div>
                                        <div class="col-md-1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1"></div>
                                        <div class="discount-div col-md-10" style="display:none;"></div>
                                        <div class="col-md-1"></div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-1"></div>
                                        <div class="final-cost-div col-md-10" style="display: block;">
                                            <div class="row">
                                                <div class="form-group"><label class="control-label col-md-6 col-sm-6"> Final Cost </label>
                                                    <div class="final-amount-button col-md-6 col-sm-6">
                                                        <div class="col-md-6 col-sm-6">
                                                            <select name="interval" class="form-control interval"><option value="Monthly">Monthly</option><option value="Yearly">Yearly</option></select>                                    <span class="help-block">  </span>
                                                        </div>
                                                        <div class="col-md-6 col-sm-6 final-cost-price"><span type="text" class="form-control cost-format final-cost-price" style="text-align:right;">$50.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="form-group">
                                            <div class="col-md-9">
                                                <button type="submit" class="btn blue btn-submit">Start Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- END Portlet PORTLET-->
                            </div>
                        </div>

                        <div class="col-md-3">

                        </div>
                        <div class="col-md-1"></div>
                    </form>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="page-footer">
            <div class="page-footer-inner">   &copy; 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                no_of_employee: '',
                price: '',
                rows: [
                    {range: '1-10', price_per_emp: 5.00, rangeTotal: ''},
                    {range: '11-100', price_per_emp: 4.50, rangeTotal: ''},
                    {range: '101-499', price_per_emp: 4.25, rangeTotal: ''},
                    {range: '500-999', price_per_emp: 4.00, rangeTotal: ''},
                ],
                limit: '',
            };
        },
        methods: {
            getEmpNum(event) {
                this.no_of_employee = event.target.value;
                if (this.no_of_employee > 0 && this.no_of_employee < 10) {
                    this.rows[0].rangeTotal = 50;
                } 
                if (this.no_of_employee > 11 && this.no_of_employee < 100) {
                    this.limit = 10 - this.no_of_employee
                    this.rows[1].rangeTotal = this.limit * this.rows[1].price_per_emp;
                } 
                if (this.no_of_employee > 101 && this.no_of_employee < 500) {
                    this.limit = 100 - this.no_of_employee
                    this.rows[2].rangeTotal = this.limit * this.rows[2].price_per_emp;
                }
            }
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
    .page-content-wrapper .page-content {
        margin-left: 40px !important;
    }

    table.table.pricing-tbl tr td:last-child, table.table.pricing-tbl tr th:last-child {
        text-align: right;
        padding-right: 33px;
    }
    .cost-format {
        text-align: right;
        background: rgb(32, 126, 190);
        color: white;
        font-weight: bold;
        font-size: 20px;
        border: none;
        padding: 4px 28px;
    }
    .price-format{
        background: none;
        border: none;
        color: white;
        font-size: 15px;
        padding: 4px 28px;
        text-align: right;
    }
    div.alert-danger {
        padding: 10px !important;
    }
    .h3-title {
        font-weight: 600 !important;
    }
    .pricing-des{
        border: 1px solid rgba(0, 0, 0, 0.26);
        margin: 10px 0px;
        padding: 0px 20px;
        background: rgba(0, 0, 0, 0.0392157);
    }
    .pricing-des:first-child {
        margin-top: 0;
    }
</style>
